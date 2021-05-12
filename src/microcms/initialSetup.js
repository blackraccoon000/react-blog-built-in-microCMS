import store from '../store/store';
import res from './getMicroCmsData';
import { createBlog, setBlog } from '../actions/blogActions';

export default () => {
  store.subscribe(() => {
    const state = store.getState();
    console.log('all ', state);
  });

  res.asyncData().then((value) => {
    store.dispatch(setBlog(value.data.contents));
  });
};
