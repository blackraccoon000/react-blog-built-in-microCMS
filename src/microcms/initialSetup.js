import store from '../store/store';

const initialSetup = () => {
  console.log('storeTest:', store);
  store.subscribe(() => {
    const state = store.getState();
    console.log('initial state:', state);
  });
};

export default initialSetup;
