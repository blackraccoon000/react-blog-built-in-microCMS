const axios = require('axios');
require('dotenv').config();
const token = process.env.TOKEN;
const acqId = process.env.ACQID;

/** 読み取り */
// const test = async () => {
//   try {
//     const res = await axios.get(`http://localhost:3000/acq/${acqId}`);
//     console.dir(res.data, { depth: null });
//   } catch (error) {
//     console.log(`error:`, error.response.status);
//     console.log(`error:`, error.response.data);
//   }
// };

/** PATCH */
const test = async () => {
  try {
    const res = await axios.patch(
      `http://localhost:3000/acq/update/${acqId}`,
      {
        //data
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.dir(res.data, { depth: null });
  } catch (error) {
    console.log(`error:`, error.response.status);
    console.log(`error:`, error.response.data);
  }
};

test();
