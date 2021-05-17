const viewDefaultState = 4;

const viewReducer = (state = viewDefaultState, action) => {
  switch (action.type) {
    case 'VIEW_PAGES':
      // console.log('vR-state:', state);
      // console.log('vR-action:', action);
      return state + action.views;
    default:
      return state;
  }
};

export default viewReducer;
