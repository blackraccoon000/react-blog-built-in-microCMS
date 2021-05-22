/** Axiosが暴発しないためのセーフティ */
const axiosCheck = (data) => {
  const { length, views, obtainable } = data;
  const ac1 = length === 0;
  const ac2 = !length === !views;
  const ac3 = views < obtainable;
  const ac4 = !!length === ac3;
  const axc = ac1 ? ac2 : ac4;
  return axc;
};

export default axiosCheck;
