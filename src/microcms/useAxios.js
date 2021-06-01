import axios from 'axios';

const useAxios = async (query) => {
  try {
    console.log('==========axios start==========', { query });
    return await axios.get(`${query}`, {});
  } catch (error) {
    console.log('==========Error axios No start==========', { error });
  }
};

export default useAxios;
