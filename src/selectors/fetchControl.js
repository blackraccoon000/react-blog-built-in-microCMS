import { initialSetup } from '../actions/common';
import store from '../store/store';
import useAxios from '../microcms/useAxios';

const fetchControl = (command, query) => {
  // console.log({ command }, { query });
  switch (command) {
    case 'start':
      useAxios(query)
        .then((data) => {
          store.dispatch(initialSetup(data));
        })
        .catch((error) => console.log('★★★★★ Axios Start Error:', error));
      break;
    // case 'acquired':
    //   useAxios(query)
    //     .then((data) => {
    //       // store.dispatch(initialSetup(data));
    //     })
    //     .catch((error) => console.log('★★★★★ Axios Start Error:', error));
    //   break;
    default:
      useAxios(query)
        .then((value) => console.log(value))
        .catch((error) => console.error('★★★★★ Axios Default Error:', error));
      break;
  }
};

export default fetchControl;
