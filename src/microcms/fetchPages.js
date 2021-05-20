import axios from 'axios';
import store from '../store/store';
import { setPages } from '../actions/articleActions';
import { viewTotalCount } from '../actions/viewActions';

const fetchPages = async (queries = '/') => {
  await axios
    .get(`https://playwell.microcms.io/api/v1/blog${queries}`, {
      headers: { 'X-API-KEY': process.env.X_API_KEY },
    })
    .then((value) => {
      store.dispatch(setPages(value.data.contents));
      store.getState().views.totalCount === 0 && // ページカウントを追加する。
        store.dispatch(viewTotalCount(value.data.totalCount));
    })
    .catch(() => console.log('error'));
};

export default fetchPages;
