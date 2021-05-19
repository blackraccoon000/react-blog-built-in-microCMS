import store from '../store/store';
import res from './getMicroCmsData';
import { setPages } from '../actions/articleActions';

const pageGetter = (props, offset, limit) => {
  console.log(props);
  res.asyncData(offset, limit, `/${props.match.params.id}/`).then((value) => {
    console.log(value.data);
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
    store.dispatch(setPages([value.data]));
    // props.viewsUpdater(props.views.limitCount);
  });
};

export default pageGetter;
