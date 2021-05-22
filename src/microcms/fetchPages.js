import store from '../store/store';
import reduxCheck from '../selectors/reduxCheck';
import axiosCheck from '../selectors/axiosCheck';
import queryShaping from '../selectors/queryShaping';
import fetchControl from '../selectors/fetchControl';

const fetchPages = async (queries = '/', getLimit = 4) => {
  const data = reduxCheck(store.getState().contents);
  const axc = axiosCheck(data);
  const str = queryShaping(queries, data, getLimit);
  fetchControl(queries, store, axc, str);
};

export default fetchPages;
