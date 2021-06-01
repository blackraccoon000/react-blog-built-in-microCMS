import reduxCheck from '../selectors/reduxCheck';
import axiosCheck from '../selectors/axiosCheck';
import queryShaping from '../selectors/queryShaping';
import fetchControl from '../selectors/fetchControl';

const fetchPages = async (command, id = '') => {
  const query = queryShaping(command, id);
  fetchControl(command, query);
};

export default fetchPages;
