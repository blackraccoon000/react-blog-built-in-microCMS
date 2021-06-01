const defaultState = {
  acquired: [],
  unAcquired: [],
  totalCount: 0,
  availableViews: 0,
  viewsSortByIds: [],
};

const statusReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INITIAL_SETUP':
      return {
        acquired: state.acquired,
        unAcquired: action.status.viewsSortByIds,
        totalCount: action.status.totalCount,
        availableViews: action.status.availableViews,
        viewsSortByIds: action.status.viewsSortByIds,
      };
    case 'AVAILABLE_VIEWS_COUNT_UP':
      return {
        acquired: state.acquired,
        unAcquired: state.viewsSortByIds,
        totalCount: state.totalCount,
        availableViews: action.status.availableViews,
        viewsSortByIds: state.viewsSortByIds,
      };
    default:
      return state;
  }
};

export default statusReducer;
