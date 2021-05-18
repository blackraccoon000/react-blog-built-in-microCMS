import store from '../store/store';
import res from './getMicroCmsData';
import { setPages } from '../actions/articleActions';
import { viewTotalCount } from '../actions/viewActions';

const initialSetup = () => {
  store.subscribe(() => {
    const state = store.getState();
    console.log('initial state:', state);
  });

  res.asyncData(0, 8).then((value) => {
    store.dispatch(viewTotalCount(value.data.totalCount));
    store.dispatch(setPages(value.data.contents));
  });
};

export default initialSetup;
