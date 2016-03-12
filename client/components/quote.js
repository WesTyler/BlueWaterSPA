var QuotePage = exports = {};

QuotePage.view = function(ctrl) {
  return m('div', [
      m('form', {class: 'quoteForm clearfix'}, [
          m('label', {class: 'quoteItem'}, 'Contact Name', [
            m('input', {value: QuotePage.vm.name(), oninput: m.withAttr('value', QuotePage.vm.name)})
          ]),
          m('label', {class: 'quoteItem'}, 'Company', [
              m('input', {value: QuotePage.vm.companyName(), oninput: m.withAttr('value', QuotePage.vm.companyName)})
          ]),
          m('label', {class: 'quoteItem'}, 'Email', [
              m('input', {value: QuotePage.vm.email(), type: 'email', oninput: m.withAttr('value', QuotePage.vm.email)})
          ]),
          m('label', {class: 'quoteItem'}, 'Phone', [
              m('input', {value: QuotePage.vm.phone(), type: 'tel', oninput: m.withAttr('value', QuotePage.vm.phone)})
          ]),
          m('label', {class: 'quoteItem'}, 'Other Comments', [
              m('input', {value: QuotePage.vm.comments(), oninput: m.withAttr('value', QuotePage.vm.comments)})
          ]),
          m('button', {class: 'quoteItem', onclick: QuotePage.vm.save}, 'Save Changes')
      ])
  ])
};

QuotePage.vm = {
  init: function() {
    QuotePage.vm.name = m.prop('');
    QuotePage.vm.companyName = m.prop('');
    QuotePage.vm.email = m.prop('');
    QuotePage.vm.phone = m.prop('');
    QuotePage.vm.comments = m.prop('');

    QuotePage.vm.quoteData = m.prop({});

    QuotePage.vm.save = function() {
        // console.log('CALLING QuotePAge.vm.save')
      var quoteData = {
        name    : QuotePage.vm.name(),
        company : QuotePage.vm.companyName(),
        email   : QuotePage.vm.email(),
        phone   : QuotePage.vm.phone(),
        comments: QuotePage.vm.comments()
      };

      QuotePage.vm.quoteData(new Quote(quoteData));
      console.log('Quote model: \n', QuotePage.vm.quoteData());

      m.request({method: 'POST', url: '/quote', data: QuotePage.vm.quoteData()})
        .then(function(res)  {
          alert('A quote has successfully been requested.');
          QuotePage.vm.name('');
          QuotePage.vm.companyName('');
          QuotePage.vm.email('');
          QuotePage.vm.phone('');
          QuotePage.vm.comments('');
        });
    };
  }
};

QuotePage.controller = function() {
  QuotePage.vm.init();

  this.toggleService = function(e) {
    console.log(e.srcElement.value)
  }
};