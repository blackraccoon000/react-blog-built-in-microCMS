import axios from 'axios';
import { setPages } from '../actions/articleActions';

const initializePages = async (dispatch, getState) => {
  const data = await axios.get(`https://playwell.microcms.io/api/v1/blog`, {
    headers: { 'X-API-KEY': process.env.X_API_KEY },
  });
  dispatch(setPages(data.data.contents));
};

export default initializePages;
