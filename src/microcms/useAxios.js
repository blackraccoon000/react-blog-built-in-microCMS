import axios from 'axios';

const useAxios = async (axc, str) => {
  if (axc) {
    console.log('==========axios start==========');
    return await axios.get(`${str}`, {
      headers: { 'X-API-KEY': process.env.X_API_KEY },
    });
  } else {
    console.log('==========axios No start==========');
  }
};

export default useAxios;
