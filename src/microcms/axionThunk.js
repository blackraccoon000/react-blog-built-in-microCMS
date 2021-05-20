import axios from 'axios';
import { setPages } from '../actions/articleActions';

const axiosThunk = () => async (dispatch, getState) => {
  // console.log('getState:', getState());
  const response = await axios.get(`https://playwell.microcms.io/api/v1/blog`, {
    headers: {
      'X-API-KEY': process.env.X_API_KEY,
    },
  });
  return response;
  // return dispatch(setPages(response));
};

export default axiosThunk;
