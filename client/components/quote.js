var Quote = exports = {};

Quote.controller = function() {
  var ctrl = this;
};

Quote.view = function(ctrl) {
  return m('form', {class: 'quoteForm clearfix'}, [
      m('input')
  ]);
};