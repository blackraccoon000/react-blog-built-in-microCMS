import store from '../store/store';
import res from './getMicroCmsData';
import { setPages } from '../actions/articleActions';

export default () => {
  store.subscribe(() => {
    const state = store.getState();
    console.log('all ', state);
  });

  res.asyncData().then((value) => {
    store.dispatch(setPages(value.data.contents));
  });
};
