import store from '../store/store';
import res from './getMicroCmsData';
// import res from './connectToMicroCms';
import { setPages } from '../actions/articleActions';

const pageGetter = (props, offset, limit) => {
  res.asyncData(offset, limit, `/${props.match.params.id}/`).then((value) => {
    store.dispatch(setPages([value.data]));
  });
};
// const pageGetter = (props) => {
//   res.asyncData(`/${props.match.params.id}/`).then((value) => {
//     store.dispatch(setPages([value.data]));
//   });
// };

export default pageGetter;
