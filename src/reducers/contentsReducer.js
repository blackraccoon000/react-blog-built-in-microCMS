const defaultState = {
  pages: [],
  views: {
    availableViews: 0,
    obtainable: 0,
    contentsList: [],
  },
};

const contentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PAGES_AND_COUNT':
      return {
        pages: [...state.pages, ...action.pages],
        views: {
          availableViews: action.views.availableViews,
          obtainable: state.views.obtainable,
          contentsList: [...action.views.contentsList],
        },
      };
    case 'SET_CONTENTS_LIST':
      return {
        pages: [...state.pages],
        views: {
          availableViews: state.views.availableViews,
          obtainable: state.views.obtainable,
          contentsList: [...action.views.contentsList],
        },
      };
    case 'SET_OBTAINABLE':
      return {
        pages: [...state.pages],
        views: {
          availableViews: state.views.availableViews,
          obtainable: action.views.obtainable,
          contentsList: [...state.views.contentsList],
        },
      };
    default:
      return state;
  }
};

export default contentsReducer;
