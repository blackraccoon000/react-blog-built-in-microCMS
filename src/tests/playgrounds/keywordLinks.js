const keywordData = require('../fixtures/keywordData');

/**
 * @returns Keywords
 * 出力結果サンプルは "../fixtures/ajustmentKeywordsSample.js"
 */
const adjustmentKeywordsCreator = () => {
  const keywords = keywordData
    .map((mass) => mass.keyword)
    .join(',')
    .split(',');
  return Array.from(new Set(keywords));
};
// const adjustmentKeywords = adjustmentKeywordsCreator();

/**
 * @returns null
 * 宣言したkeywordObjに指定したkeywordを持っているIDを収集する。
 * 出力結果サンプルは "../fixtures/ajustmentKeywordsSample.js"
 */
const matchingKeywordToId = () => {
  return adjustmentKeywordsCreator().map((keyword) => {
    const matchMass = keywordData
      .filter((mass) => mass.keyword.indexOf(keyword) !== -1)
      .map((mass) => mass.id);
    console.log({
      keyword,
      ids: matchMass,
    });
  });
};

//　実行方法
matchingKeywordToId();

// アクセス方法
//keywordObj['react'].map((keyword) => console.log(keyword));
