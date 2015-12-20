var Home = exports = {};

Home.controller = function() {
  var ctrl = this;
};

Home.view = function(ctrl) {
  return m('div', {class: 'homepage clearfix'}, [
      m('div', 'This should be the homepage content.')
  ]);
};