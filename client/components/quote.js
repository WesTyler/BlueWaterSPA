var QuotePage = exports = {};

QuotePage.view = function(ctrl) {
  return m('div', [m('form', {class: 'quoteForm clearfix'}, [
      m('input', {value: QuotePage.vm.name(), oninput: m.withAttr('value', QuotePage.vm.name)}),
      m('input', {value: QuotePage.vm.email(), oninput: m.withAttr('value', QuotePage.vm.email)}),
      m('input', {value: QuotePage.vm.phone(), oninput: m.withAttr('value', QuotePage.vm.phone)}),
      m('input', {value: QuotePage.vm.services(), oninput: m.withAttr('value', QuotePage.vm.services)}),
      m('input', {value: QuotePage.vm.comments(), oninput: m.withAttr('value', QuotePage.vm.comments)}),
      m('button', {onclick: QuotePage.vm.save}, 'Save Changes')
  ]),
  m('div', 'Values \n' , QuotePage.vm.name(), '\n', QuotePage.vm.email(), '\n', QuotePage.vm.phone(), QuotePage.vm.comments())]);
};

QuotePage.vm = {
  init: function() {
    QuotePage.vm.name = m.prop('');
    QuotePage.vm.email = m.prop('');
    QuotePage.vm.phone = m.prop('');
    QuotePage.vm.services = m.prop('');
    QuotePage.vm.comments = m.prop('');

    QuotePage.vm.quoteData = m.prop({});

    QuotePage.vm.save = function() {
      var quoteData = {
        name    : QuotePage.vm.name(),
        email   : QuotePage.vm.email(),
        phone   : QuotePage.vm.phone(),
        services: QuotePage.vm.services(),
        comments: QuotePage.vm.comments()
      };

      QuotePage.vm.quoteData(new Quote(quoteData));
      console.log('Quote model: \n', QuotePage.vm.quoteData())
      QuotePage.vm.name = m.prop('');
      QuotePage.vm.email = m.prop('');
      QuotePage.vm.phone = m.prop('');
      QuotePage.vm.services = m.prop([]);
      QuotePage.vm.comments = m.prop('');
    };
  }
};

QuotePage.controller = function() {
  QuotePage.vm.init();
};