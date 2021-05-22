const setContents = (pages, contentsList) => {
  return {
    type: 'SET_PAGES_AND_COUNT',
    pages,
    views: {
      contentsList,
      availableViews: contentsList
        .map((contents) => (contents.Acquired === true ? 1 : 0))
        .reduce((acc, cur) => acc + cur),
    },
  };
};

const setContentsList = (contentsList) => {
  return {
    type: 'SET_CONTENTS_LIST',
    views: {
      contentsList,
    },
  };
};

const setObtainable = (obtainable) => {
  return {
    type: 'SET_OBTAINABLE',
    views: {
      obtainable,
    },
  };
};

export { setContents, setContentsList, setObtainable };
