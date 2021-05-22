/**
 * reduxに実行時にある情報を取得する。
 */
const reduxCheck = (contents) => {
  // console.log('redux: ', contents);
  return {
    length: contents.pages.length,
    views: contents.views.availableViews,
    obtainable: contents.views.obtainable,
    contentsList: contents.views.contentsList,
  };
};

export default reduxCheck;
