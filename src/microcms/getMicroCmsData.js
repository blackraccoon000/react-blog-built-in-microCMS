import axios from 'axios';

const res = {
  async asyncData() {
    return await axios.get('https://playwell.microcms.io/api/v1/blog', {
      headers: {
        'X-API-KEY': process.env.X_API_KEY,
      },
    });
  },
};

export default res;
