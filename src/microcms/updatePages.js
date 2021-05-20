import axios from 'axios';
import { setPages } from '../actions/articleActions';
import { viewTotalCount } from '../actions/viewActions';

const updatePages = async (queries = '/', dispatch) => {
  await axios
    .get(`https://playwell.microcms.io/api/v1/blog${queries}`, {
      headers: { 'X-API-KEY': process.env.X_API_KEY },
    })
    .then((value) => {
      dispatch(setPages(value.data.contents));
      dispatch(viewTotalCount(value.data.totalCount));
    })
    .catch(() => console.log('error'));
};

export default updatePages;
