const viewPages = (pageCount) => {
  console.log('pageCountが更新されました', pageCount);
  return {
    type: 'VIEW_PAGES',
    pageCount,
  };
};

const viewTotalCount = (totalCount) => {
  console.log('totalCountが更新されました', totalCount);
  return {
    type: 'VIEW_TOTAL_COUNT',
    totalCount,
  };
};

const viewError = (error) => {
  return {
    type: 'VIEW_ERROR',
    error,
  };
};

export { viewPages, viewTotalCount, viewError };
