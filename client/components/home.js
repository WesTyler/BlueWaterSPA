var Home = exports = {};

Home.controller = function() {
  var ctrl = this;
};

Home.view = function(ctrl) {
  return m('div', {class: 'homepage clearfix'}, [
      m('div', 'Welcome to BlueWater Energy Services, LLC. Thank you for visiting us. For information about who we are and what we do, please see our About pages.'),
      m('div', 'To request pricing or more detailed information, please visit our Request A Quote page.'),
      m('div', 'To contact us, please see our details at the bottom of all pages.')
  ]);
};