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
    const idAry = value.data.contents.map((page) => {
      return {
        id: page.id,
        title: page.title,
      };
    });

    const pageAry = value.data.contents.map((page, num) => {
      return {
        ...page,
        prevId: idAry[num - 1] ? idAry[num - 1].id : undefined,
        prevTitle: idAry[num - 1] ? idAry[num - 1].title : undefined,
        nextId: idAry[num + 1] ? idAry[num + 1].id : undefined,
        nextTitle: idAry[num + 1] ? idAry[num + 1].title : undefined,
      };
    });

    console.log('initialSetup');
    store.dispatch(viewTotalCount(value.data.totalCount));
    store.dispatch(setPages(pageAry));
  });
};

export default initialSetup;
