import res from './connectToMicroCms';
import store from '../store/store';
import { setPages, editPage } from '../actions/articleActions';
import { viewTotalCount, viewError } from '../actions/viewActions';

const homeSetup = () => {
  res
    .asyncData()
    .then((value) => {
      // const idAry = value.data.contents.map((page) => {
      //   return {
      //     id: page.id,
      //     title: page.title,
      //   };
      // });

      // const pageAry = value.data.contents.map((page, num) => {
      //   return {
      //     ...page,
      //     prevId: idAry[num - 1] ? idAry[num - 1].id : undefined,
      //     prevTitle: idAry[num - 1] ? idAry[num - 1].title : undefined,
      //     nextId: idAry[num + 1] ? idAry[num + 1].id : undefined,
      //     nextTitle: idAry[num + 1] ? idAry[num + 1].title : undefined,
      //   };
      // });

      console.log('initialSetup');
      store.dispatch(viewTotalCount(value.data.totalCount));
      // store.dispatch(setPages(pageAry));
      store.dispatch(setPages(value.data.contents));
    })
    .catch(store.dispatch(viewError('データベースと接続ができません')));
};

export default homeSetup;
