/**
 * reduxに実行時にある情報を取得する。
 */
const reduxCheck = (contents, id) => {
  return {
    id,
    length: contents.pages.length,
    views: contents.views.availableViews,
    obtainable: contents.views.obtainable,
    contentsList: contents.views.contentsList,
  };
};

export default reduxCheck;
