const viewPages = (pageCount) => {
  return {
    type: 'VIEW_PAGES',
    pageCount,
  };
};

const viewTotalCount = (totalCount) => {
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
