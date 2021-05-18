const viewDefaultState = {
  pageCount: 8,
  limitCount: 4,
  totalCount: 0,
}; // 初期表示数のコントロール

const viewReducer = (state = viewDefaultState, action) => {
  switch (action.type) {
    case 'VIEW_PAGES':
      // console.log('vR-state:', state);
      // console.log('vR-action:', action);
      const pageCount = state.pageCount + action.pageCount;
      return {
        ...state,
        pageCount,
      };
    case 'VIEW_TOTAL_COUNT':
      const totalCount = action.totalCount;
      // console.log('VTC-state:', state);
      // console.log('VTC-action:', action.totalCount);
      // console.log('vtcop:', { ...state, ...action });
      return { ...state, totalCount };
    default:
      return state;
  }
};

export default viewReducer;
