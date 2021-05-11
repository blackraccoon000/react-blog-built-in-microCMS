import axios from 'axios';

console.log(process.env.X_API_KEY);

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
