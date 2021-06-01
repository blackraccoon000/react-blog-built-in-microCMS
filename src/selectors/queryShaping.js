const fields = 'id,title,keyword,thumbnail,createdAt,updatedAt,body';
const keywordFields = 'id,title,keyword,createdAt,updatedAt';

const acqId = process.env.ACQID;
// const url = "http://0.0.0.0:3000/acq"
const url = 'http://0.0.0.0:3000/acqhttp://blog-api.playwell.site/';
const str = 'https://playwell.microcms.io/api/v1/blog';
import store from '../store/store';

const queryShaping = (command, id) => {
  switch (command) {
    case 'start':
      return `${url}/${acqId}`;
    case 'acquired':
      return `${str}?ids=${id}&fields=body`;
    default:
      return '';
  }
};

export default queryShaping;
