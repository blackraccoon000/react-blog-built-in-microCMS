const getPageSelector = (props) => {
  if (props.views.obtainable !== 0 && props.views.contentsList.length !== 0) {
    const vSBI = props.views.viewsSortByIds;
    const vcL = props.views.contentsList;
    const vo = props.views.obtainable;

    /** prev & next Id を生成 */
    const selfNum = vcL.find((contents) => contents.id === props.id).aryNum;
    const prevId = selfNum !== 0 && vcL[selfNum - 1].id; // "first"
    const nextId = selfNum + 1 !== vo && vcL[selfNum + 1].id; // "last"

    // props.pageの情報は参照している記事情報が反映されないと埋まらないため、
    // idをまとめて取得することができない。
    // const prevId = props.page.prevId; // "first"
    // const nextId = props.page.nextId; // "last"

    /** 取得判定 */
    const selfIdChk = vSBI.indexOf(props.id) === -1;
    const prevIdChk = vSBI.indexOf(prevId) === -1 && selfNum !== 0;
    const nextIdChk = vSBI.indexOf(nextId) === -1 && selfNum + 1 !== vo;

    if (prevIdChk && selfIdChk && nextIdChk) {
      console.log(
        'prevIdChk && selfIdChk && nextIdChk',
        { prevIdChk },
        { selfIdChk },
        { nextIdChk }
      );
      props.faster([prevId, props.id, nextId]);
    } else if (prevIdChk && selfIdChk) {
      console.log(
        'prevIdChk && selfIdChk',
        { prevIdChk },
        { selfIdChk },
        { nextIdChk }
      );
      props.faster([prevId, props.id]);
    } else if (selfIdChk && nextIdChk) {
      console.log(
        'selfIdChk && nextIdChk',
        { prevIdChk },
        { selfIdChk },
        { nextIdChk }
      );
      props.faster([props.id, nextId]);
    } else if (selfIdChk) {
      console.log('selfIdChk', { prevIdChk }, { selfIdChk }, { nextIdChk });
      props.faster([props.id]);
    } else if (prevIdChk) {
      console.log('prevIdChk', { prevIdChk }, { selfIdChk }, { nextIdChk });
      props.faster([prevId]);
    } else if (nextIdChk) {
      console.log('nextIdChk', { prevIdChk }, { selfIdChk }, { nextIdChk });
      props.faster([nextId]);
    }
  }
};

export default getPageSelector;
