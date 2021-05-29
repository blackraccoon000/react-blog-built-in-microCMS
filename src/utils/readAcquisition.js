const axios = require('axios');
require('dotenv').config();
const acqId = process.env.ACQID;

/** 読み取り */
const readAcquisition = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/acq/${acqId}`);
    console.dir(res.data, { depth: null });
  } catch (error) {
    console.log(`error:`, error.response.status);
    console.log(`error:`, error.response.data);
  }
};

readAcquisition();
