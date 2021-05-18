const viewPages = (pageCount) => {
  // console.log('vps:', pageCount);
  return {
    type: 'VIEW_PAGES',
    pageCount,
  };
};

const viewTotalCount = (totalCount) => {
  console.log('vtc:', totalCount);
  return {
    type: 'VIEW_TOTAL_COUNT',
    totalCount,
  };
};

export { viewPages, viewTotalCount };
