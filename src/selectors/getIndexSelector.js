const getIndexSelector = (props) => {
  props.views.availableViews < 4 &&
    props.views.obtainable !== 0 &&
    props.views.contentsList.length !== 0 &&
    props.updater(4 - props.views.availableViews);
};

export default getIndexSelector;
