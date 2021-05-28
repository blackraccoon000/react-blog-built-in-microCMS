const axios = require('axios');

/** POST SIGN IN */
// const test = async () => {
//   try {
//     const res = await axios.post(`http://localhost:3000/user/signIn`, {
//       email: 'yutakaf@playwell.site',
//       password: 'sadadsa',
//     });
//     // return res.data;
//     console.log(res.data);
//   } catch (error) {
//     console.log(`error:`, error.response.status);
//     console.log(`error:`, error.response.data);
//   }
// };

// axios.get('https://api.example.com/api/v1/foo', {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   }
// })

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTc2MDI4NTk2NTczYjA1N2JjYmUiLCJpYXQiOjE2MjIyMDU3MzJ9.o6Cn48V8nQXV0DXS6qPo8FkI4vMcAdYE6n10izPj40c';

/** GET USER/ME */
// const test = async () => {
//   try {
//     const res = await axios.get(`http://localhost:3000/user/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(res.data);
//   } catch (error) {
//     console.log(`error:`, error.response.status);
//     console.log(`error:`, error.response.data);
//   }
// };

/** 書き込み */
// const fs = require('fs');
// const test = async () => {
//   try {
//     const res = await axios.get(
//       `http://localhost:3000/acq/60b0bcf753ab86a1be40bf1b`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     console.dir(res.data, { depth: null });
//     // const a = JSON.parse(res.data);
//     // console.log(a);
//     // console.log(typeof res.data);
//     // fs.writeFile('./file1.txt', res, (err) => {
//     //   if (err) throw err;
//     //   console.log('正常に書き込みが完了しました');
//     // });
//   } catch (error) {
//     // console.log(`error:`, error.response.status);
//     // console.log(`error:`, error.response.data);
//     console.log(error);
//   }
// };

/** PUT 失敗*/
// const test = async () => {
//   try {
//     const res = await axios.put(
//       `http://localhost:3000/acq/update/60b0bcf753ab86a1be40bf1b`,
//       {
//         header: {
//           Accept: 'application/json',
//           'Content-type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
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
      `http://localhost:3000/acq/update/60b0bcf753ab86a1be40bf1b`,
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
