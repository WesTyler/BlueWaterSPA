var QuotePage = exports = {};

QuotePage.view = function() {
  return m('div.container', [
    Nav.view(),
    m('form', {class: 'view contact-form clearfix'}, [
        m('ul.contact-ul', [
            m('li', [
                m('h4', 'Contact us for more information.'),
                m('h5', 'You will be contacted within 24 hours to discuss the details of your request.')
            ]),
            m('li.contact-li', [
                m('label', 'Contact Name'),
                m('input', {placeholder: 'Name', value: QuotePage.vm.name(), oninput: m.withAttr('value', QuotePage.vm.name)})
            ]),
            m('li.contact-li', [
                m('label', 'Email'),
                m('input', {placeholder: 'example@email.com', value: QuotePage.vm.email(), type: 'email', oninput: m.withAttr('value', QuotePage.vm.email)})
            ]),
            m('li.contact-li', [
                m('label', 'Phone Number'),
                m('input', {placeholder: '(555) 555-5555', value: QuotePage.vm.phone(), type: 'tel', oninput: m.withAttr('value', QuotePage.vm.phone)})
            ]),
            m('li.contact-li', [
                m('label', 'Company Name'),
                m('input', {placeholder: 'Company Name', value: QuotePage.vm.companyName(), oninput: m.withAttr('value', QuotePage.vm.companyName)})
            ]),
            m('li.contact-li', [
                m('label', 'Type of Containment'),
                m('input', {placeholder: 'Tell us about what you are needing.', value: QuotePage.vm.containmentNeeded(), oninput: m.withAttr('value', QuotePage.vm.containmentNeeded)})
            ]),
            m('li.contact-li', [
                m('label', 'Type of Equipment'),
                m('input', {placeholder: 'Tell us about what you have.', value: QuotePage.vm.containmentEquipment(), oninput: m.withAttr('value', QuotePage.vm.containmentEquipment)})
            ]),
            m('li.contact-li', [
                m('label', 'Estimated Dimensions of Containment (ft)'),
                m('input', {placeholder: 'Length (0.0)', value: QuotePage.vm.containmentLength(), oninput: m.withAttr('value', QuotePage.vm.containmentLength)}),
                m('br'),
                m('input', {placeholder: 'Width (0.0)', value: QuotePage.vm.containmentWidth(), oninput: m.withAttr('value', QuotePage.vm.containmentWidth)}),
                m('br'),
                m('input', {placeholder: 'Height (0.0)', value: QuotePage.vm.containmentHeight(), oninput: m.withAttr('value', QuotePage.vm.containmentHeight)})
            ]),
            m('li.contact-li', [
                m('label', 'Other Comments'),
                m('textarea', {placeholder: 'Please share any other details with us here.', value: QuotePage.vm.comments(), oninput: m.withAttr('value', QuotePage.vm.comments)})
            ]),
            m('button', {class: 'quoteItem', onclick: QuotePage.vm.save}, 'Request Quote'),
            m('li', [
                m('h3', 'Contact Us'),
                m('h4', 'Mailing'),
                m('p', 'BlueWater Energy Services, LLC'),
                m('p','PO Box 850827'),
                m('p','Yukon, OK 73085'),
                m('h4', 'Email'),
                m('a', {href: 'mailto:contact@bluewaterok.com'}, 'contact@bluewaterok.com')
            ])
        ])
    ]),
    Footer.view()
  ])
};

QuotePage.vm = {
  init: function() {
      QuotePage.vm.name = m.prop('');
      QuotePage.vm.companyName = m.prop('');
      QuotePage.vm.email = m.prop('');
      QuotePage.vm.phone = m.prop('');
      QuotePage.vm.comments = m.prop('');
      QuotePage.vm.containmentNeeded = m.prop('');
      QuotePage.vm.containmentEquipment = m.prop('');
      QuotePage.vm.containmentLength = m.prop('');
      QuotePage.vm.containmentWidth = m.prop('');
      QuotePage.vm.containmentHeight = m.prop('');

      QuotePage.vm.quoteData = m.prop({});

      QuotePage.vm.save = function() {
          var quoteData = {
              name       : QuotePage.vm.name(),
              company    : QuotePage.vm.companyName(),
              email      : QuotePage.vm.email(),
              phone      : QuotePage.vm.phone(),
              comments   : QuotePage.vm.comments(),
              containment: QuotePage.vm.containmentNeeded(),
              equipment  : QuotePage.vm.containmentEquipment(),
              length     : QuotePage.vm.containmentLength(),
              width      : QuotePage.vm.containmentWidth(),
              height     : QuotePage.vm.containmentHeight()
          };

      QuotePage.vm.quoteData(new Quote(quoteData));

      m.request({method: 'POST', url: '/quote', data: QuotePage.vm.quoteData()})
          .then(function(res)  {
              alert('A quote has successfully been requested.');
              QuotePage.vm.name('');
              QuotePage.vm.companyName('');
              QuotePage.vm.email('');
              QuotePage.vm.phone('');
              QuotePage.vm.comments('');
              QuotePage.vm.containmentNeeded('');
              QuotePage.vm.containmentEquipment('');
              QuotePage.vm.containmentLength(0);
              QuotePage.vm.containmentWidth(0);
              QuotePage.vm.containmentHeight(0);
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