const defaultState = {
  pages: [],
  views: {
    availableViews: 0,
    viewsSortByIds: [],
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
          viewsSortByIds: action.views.viewsSortByIds,
          obtainable: state.views.obtainable,
          contentsList: [...action.views.contentsList],
        },
      };
    case 'SET_CONTENTS_LIST':
      return {
        pages: [...state.pages],
        views: {
          availableViews: state.views.availableViews,
          viewsSortByIds: state.views.viewsSortByIds,
          obtainable: state.views.obtainable,
          contentsList: [...action.views.contentsList],
        },
      };
    case 'SET_OBTAINABLE':
      return {
        pages: [...state.pages],
        views: {
          availableViews: state.views.availableViews,
          viewsSortByIds: state.views.viewsSortByIds,
          obtainable: action.views.obtainable,
          contentsList: [...state.views.contentsList],
        },
      };
    default:
      return state;
  }
};

export default contentsReducer;
