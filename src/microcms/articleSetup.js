import res from './connectToMicroCms';
import store from '../store/store';
import { setPages, editPage } from '../actions/articleActions';
import { viewTotalCount, viewError } from '../actions/viewActions';

const articleSetup = (queriesId) => {
  res
    .asyncData(`${queriesId}`)
    .then((value) => {
      store.dispatch(setPages(value.data.contents));
    })
    .catch(store.dispatch(viewError('データベースと接続ができません')));
};

export default articleSetup;
