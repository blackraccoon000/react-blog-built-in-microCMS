const contentsListCreator = (value, store) => {
  const storeContents = store.getState().contents.views.contentsList;
  const storeObtainable = store.getState().contents.views.obtainable;
  const valueContents = value.data.contents;

  /** 取得しているIDをリスト化する */
  const storeGetIds = storeContents.map((contents) => contents.id);
  const valueGetIds = valueContents.map(({ id } = page) => id);
  const valueGetTitles = valueContents.map(({ title } = page) => title);

  const acquiredIds = storeContents
    .filter((contents) => contents.Acquired === true)
    .map((contents) => contents.id);
  // console.log('acquiredIds:', acquiredIds);
  // console.log('valueGetIds:', valueGetIds);
  // console.log('storeGetIds:', storeGetIds);

  // console.log('valueGetIds:', valueGetIds.length, valueGetIds);

  switch (storeGetIds.length) {
    case 0:
      return valueGetTitles.length === 0 && valueGetTitles[0] === undefined
        ? valueGetIds.map((id, aryNum) => ({
            aryNum,
            id,
            Acquired: false,
          }))
        : valueGetIds.map((id, aryNum) => ({
            aryNum,
            id,
            Acquired: true,
          }));
    case 1:
      return valueGetIds.map((id, aryNum) => ({
        aryNum,
        id,
        Acquired: storeGetIds.indexOf(id) === -1 ? false : true,
      }));
    default:
      // console.log('valueGetIds Concat:', valueGetIds.concat(acquiredIds));
      return (
        storeContents.length === storeObtainable &&
        storeGetIds.map((id, aryNum) => ({
          aryNum,
          id,
          Acquired:
            valueGetIds.concat(acquiredIds).indexOf(id) === -1 ? false : true,
        }))
      );
  }
};

export default contentsListCreator;
