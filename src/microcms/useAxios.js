import axios from 'axios';

const useAxios = async (query) => {
  try {
    console.log('==========axios start==========', { query });
    return await axios.get(`${query}`, {
      headers: {
        'X-API-KEY': process.env.X_API_KEY,
      },
    });
  } catch (error) {
    console.log('==========Error axios No start==========', { error });
  }
};

export default useAxios;
