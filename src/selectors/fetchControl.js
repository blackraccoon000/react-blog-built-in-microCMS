import {
  setObtainable,
  setContents,
  setContentsList,
} from '../actions/contentsActions';
import contentsListCreator from './contentsListCreator';
import useAxios from '../microcms/useAxios';
import fetchPages from '../microcms/fetchPages';

const fetchControl = (queries, store, axc, str) => {
  switch (queries) {
    case 'start':
      useAxios(axc, str)
        .then((value) => {
          store.dispatch(setObtainable(value.data.totalCount));
          fetchPages('contentsList');
        })
        .catch((error) => console.error('★★★★★ Axios Start Error:', error));
      break;
    case 'contentsList':
      useAxios(axc, str)
        .then((value) => {
          // console.log('keywords:', value);
          store.dispatch(setContentsList(contentsListCreator(value, store)));
        })
        .catch((error) =>
          console.error('★★★★★ Axios ContentsList Error:', error)
        );
      break;
    case 'acquired':
      useAxios(axc, str)
        .then((value) => {
          store.dispatch(
            setContents(value.data.contents, contentsListCreator(value, store))
          );
        })
        .catch((error) => console.error('★★★★★ Axios Acquired Error:', error));
      break;
    case 'select':
      useAxios(axc, str)
        .then((value) => {
          store.dispatch(
            setContents(value.data.contents, contentsListCreator(value, store))
          );
        })
        .catch((error) => console.error('★★★★★ Axios Select Error:', error));
      break;
    default:
      useAxios(axc, str)
        .then((value) => {
          console.log(value);
          // store.dispatch(
          //   setContents(value.data.contents, contentsListCreator(value, store))
          // );
        })
        .catch((error) => console.error('★★★★★ Axios Default Error:', error));
      break;
  }
};

export default fetchControl;
