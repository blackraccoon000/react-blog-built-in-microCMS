// const ids = '4joe11pv12p0,5gdg-uw1v,uhrjbmf8xqz3';
const fields = 'id,title,keyword,thumbnail,createdAt,updatedAt,body';

/**
 * 取得したqueriesを整形する
 */
const str = 'https://playwell.microcms.io/api/v1/blog';

const queryShaping = (queries, data, getLimit) => {
  switch (queries) {
    case '/':
      return `${str}/`;
    case 'start':
      return `${str}?limit=0`;
    case 'contentsList':
      return `${str}?fields=id&offset=0&limit=${data.obtainable}`;
    case 'acquired':
      /** contentsListの若番から未取得データIDの配列を獲得する */
      const ids = data.contentsList
        .filter((contents) => contents.Acquired === false)
        .map((contents, num) => num < getLimit && contents.id)
        .filter((contents) => contents !== false)
        .join(',');

      return `${str}?ids=${ids}&fields=${fields}&offset=0&limit=${data.obtainable}`;
    default:
      /** queriesを直接入力する */
      return `${str}${queries}`;
  }
};

export default queryShaping;
