import store from '../store/store';
import res from './getMicroCmsData';
import { setPages } from '../actions/articleActions';

const pageUpdater = (offset, limit) => {
  res.asyncData(offset, limit).then((value) => {
    store.dispatch(setPages(value.data.contents));
  });
};

export default pageUpdater;
