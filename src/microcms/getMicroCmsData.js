import axios from 'axios';

/**
 * microCMSから情報を取得する開始番号(offset),個数(limit)を指定する。
 */
const res = {
  async asyncData(offset = 0, limit = 4, id = '') {
    return await axios.get(
      `https://playwell.microcms.io/api/v1/blog${id}?offset=${offset}&limit=${limit}`,
      {
        headers: {
          'X-API-KEY': process.env.X_API_KEY,
        },
      }
    );
  },
};

export default res;
