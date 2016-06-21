var Footer = {};

Footer.controller = function() {};

Footer.view = function(ctrl) {
  return m('footer', [
      m('.footer-line', [
        m('hr.footer-rule'),
        m('span.footer-symbol', 'BW')
      ]),
      m('span.footer-text', [
        'Copyright 2013 BlueWater Energy Services. All rights reserved.',
        m('br'),
        'BlueWater Energy Services, LLC',
        m('br'),
        'PO Box 850827',
        m('br'),
        'Yukon, OK 73085',
        m('br'),
        m('a', {href: 'mailto:contact@bluewaterok.com'}, 'Contact@bluewaterok.com')
        ])
    ])
};