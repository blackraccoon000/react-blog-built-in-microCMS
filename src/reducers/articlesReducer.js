const defaultState = [];

const articlesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INITIAL_SETUP':
      return [...action.simpleArticles];
    default:
      return state;
  }
};

export default articlesReducer;
