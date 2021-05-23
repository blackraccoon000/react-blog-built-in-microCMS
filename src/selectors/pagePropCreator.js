import articleDefaultData from '../tests/fixtures/articleDefaultData';

const pagePropCreator = (state, id) => {
  let page = articleDefaultData(id);

  const cp = state.contents.pages;
  const cvcL = state.contents.views.contentsList;

  if (cp.length !== 0) {
    const beforePage = cp.find((page) => page.id === id);
    const workingPage =
      beforePage === undefined ? articleDefaultData(id) : beforePage;
    const now = cvcL.find((contents) => contents.id === id).aryNum;
    const prevId = cvcL[now - 1] ? cvcL[now - 1].id : undefined;
    const prevTitle = cp.find((page) => page.id === prevId)
      ? cp.find((page) => page.id === prevId).title
      : undefined;
    const nextId = cvcL[now + 1] ? cvcL[now + 1].id : undefined;
    const nextTitle = cp.find((page) => page.id === nextId)
      ? cp.find((page) => page.id === nextId).title
      : undefined;
    page = {
      ...workingPage,
      prevId,
      prevTitle,
      nextId,
      nextTitle,
    };
  }
  return page;
};

export default pagePropCreator;
