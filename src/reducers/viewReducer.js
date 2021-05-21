const viewDefaultState = {
  pageCount: 0, //4 or 8 ?
  limitCount: 4,
  totalCount: 0,
}; // 初期表示数のコントロール

const viewReducer = (state = viewDefaultState, action) => {
  switch (action.type) {
    case 'VIEW_PAGES':
      const pageCount = action.pageCount;
      return {
        ...state,
        pageCount,
      };
    case 'VIEW_TOTAL_COUNT':
      const totalCount = action.totalCount;
      return {
        ...state,
        totalCount,
      };
    case 'VIEW_ERROR':
      const error = action.error;
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};

export default viewReducer;
