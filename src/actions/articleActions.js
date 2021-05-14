const createPage = (createPage) => {
  const { id = '', title, note, link = '' } = createPage;
  return {
    type: 'CREATE_PAGE',
    page: {
      id,
      title,
      note,
      link,
    },
  };
};

const editPage = (id, updates) => {
  const { title = '', note = '', link = '' } = updates;
  return {
    type: 'EDIT_PAGE',
    id,
    updates: {
      title,
      note,
      link,
    },
  };
};

const removePage = (id) => {
  return {
    type: 'REMOVE_PAGE',
    id,
  };
};

const setPages = (pages) => {
  return {
    type: 'SET_PAGES',
    pages,
  };
};

export { createPage, editPage, removePage, setPages };
