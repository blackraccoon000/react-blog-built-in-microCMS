const defaultState = {
  keywordRelational: [],
  viewArticles: [],
};

const viewsReducer = (state = defaultState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case 'INITIAL_SETUP':
      return {
        keywordRelational: action.views.keywordRelational,
        viewArticles: action.views.viewArticles,
      };
    case 'AVAILABLE_VIEWS_COUNT_UP':
      return {
        keywordRelational: state.keywordRelational,
        viewArticles: action.views.viewArticles,
      };
    default:
      return state;
  }
};

export default viewsReducer;
