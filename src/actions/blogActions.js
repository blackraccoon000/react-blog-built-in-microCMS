const createBlog = (createData) => {
  const { id = '', title, note, link = '' } = createData;
  return {
    type: 'CREATE_BLOG',
    blog: {
      id,
      title,
      note,
      link,
    },
  };
};

const editBlog = (id, updates) => {
  const { title = '', note = '', link = '' } = updates;
  return {
    type: 'EDIT_BLOG',
    id,
    updates: {
      title,
      note,
      link,
    },
  };
};

const removeBlog = (id) => {
  return {
    type: 'REMOVE_BLOG',
    id,
  };
};

const setBlog = (blogData) => {
  return {
    type: 'SET_BLOG_DATA',
    blogData,
  };
};

export { createBlog, editBlog, removeBlog, setBlog };
