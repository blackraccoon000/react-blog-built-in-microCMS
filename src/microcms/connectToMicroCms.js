import axios from 'axios';

const res = {
  async asyncData(queries = '?limit=8') {
    return await axios.get(
      `https://playwell.microcms.io/api/v1/blog${queries}`,
      {
        headers: {
          'X-API-KEY': process.env.X_API_KEY,
        },
      }
    );
  },
};
export default res;
