const articleReducerDefaultState = [];

const articleReducer = (state = articleReducerDefaultState, action) => {
  // console.log('articleReducer:', state, action);
  switch (action.type) {
    case 'CREATE_PAGE':
      return [...state, action.page];
    case 'REMOVE_PAGE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PAGE':
      return state.map((page) => {
        if (page.id === action.id) {
          return {
            ...page,
            ...action.updates,
          };
        } else {
          return page;
        }
      });
    case 'SET_PAGES':
      return [...state, ...action.pages];
    default:
      return state;
  }
};

export default articleReducer;
