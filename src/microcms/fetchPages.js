import axios from 'axios';
import store from '../store/store';
import { setPages } from '../actions/articleActions';
import { viewPages, viewTotalCount } from '../actions/viewActions';

const fetchPages = async (queries = '/') => {
  const npLength = store.getState().pages.length;
  const ntCount = store.getState().views.totalCount;
  /**
   * queriesを変更する。
   */
  queries = queries !== '/' ? `${queries}&offset=${npLength}` : '/';
  console.log('queries: ', queries);

  const axiosCheck =
    npLength === 0 ? !npLength === !ntCount : npLength !== ntCount;

  console.log('axios check:', axiosCheck);
  if (axiosCheck) {
    console.log('==========axios start==========');
    await axios
      .get(`https://playwell.microcms.io/api/v1/blog${queries}`, {
        headers: { 'X-API-KEY': process.env.X_API_KEY },
      })
      .then((value) => {
        /**
         * pages 取得したコンテンツ要素
         * length 取得したコンテンツ数
         * pageCount 閲覧可能数 = 現在の閲覧可能数 + 取得したコンテンツ数　ここ変？
         * totalCount 取得可能なコンテンツ数
         * pageLimit pageCountがtotalCountを超えないようにするためのセーフティ
         */
        console.log(value);
        const pages = value.data.contents;
        const length = pages.length;
        const pageCount = store.getState().views.pageCount + length;
        const totalCount = value.data.totalCount;
        const pageLimit = pageCount <= totalCount ? pageCount : totalCount;

        /**
         * 取得したページ情報を格納
         */
        store.dispatch(setPages(pages));

        /**
         * 取得したページ情報のみ公開(Home画面)
         */
        store.dispatch(viewPages(pageLimit));

        /**
         * 記事情報の総数を取得
         */
        store.getState().views.totalCount === 0 &&
          totalCount !== 1 &&
          store.dispatch(viewTotalCount(totalCount));
      })
      .catch((error) => console.error('error:', error));
  } else {
    console.log('==========axios No start==========');
  }
};

export default fetchPages;
