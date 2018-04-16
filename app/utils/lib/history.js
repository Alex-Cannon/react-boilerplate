const onChangeListeners = [];

var push = (pathname) => {
  window.history.pushState({}, '', pathname);

  onChangeListeners.forEach(callback => callback(pathname));
}

export default {
  push,
  onChange: callback => onChangeListeners.push(callback),
  potato: true
}