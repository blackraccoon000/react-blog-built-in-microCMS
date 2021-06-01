import store from '../store/store';

const initialSetup = (value) => {
  const totalCount = value.data.totalCount;
  const keywordVal = value.data.keywordRelational;
  // const keywordRelational = value.data.keywordRelational;
  const simpleArticles = value.data.simpleArticles;
  const viewsSortByIds = simpleArticles.map((article) => article.id);
  // const availableViews = 4; // 初期値
  const availableViews = totalCount; // 初期値
  const viewArticles = simpleArticles.filter(
    (article, num) => num < availableViews
  );

  const keywordRelational = keywordVal.map((keywordLink) => {
    const ids = keywordLink.ids.map((id) => {
      return {
        id,
        title: simpleArticles.find((article) => article.id === id).title,
      };
    });
    return {
      keyword: keywordLink.keyword,
      ids,
    };
  });

  return {
    type: 'INITIAL_SETUP',
    simpleArticles,
    views: {
      keywordRelational,
      viewArticles,
    },
    status: {
      totalCount,
      viewsSortByIds,
      availableViews,
    },
  };
};

const availableViewsUpdater = (count) => {
  const { articles, status } = store.getState();
  const { availableViews, totalCount } = status;

  const viewCount =
    availableViews + count < totalCount ? availableViews + count : totalCount;

  return (
    availableViews < store.getState().status.totalCount && {
      type: 'AVAILABLE_VIEWS_COUNT_UP',
      views: {
        viewArticles: articles.filter((article, num) => num < viewCount),
      },
      status: {
        availableViews: viewCount,
      },
    }
  );
};

export { initialSetup, availableViewsUpdater };
