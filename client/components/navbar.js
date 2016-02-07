var NavBar = {};

NavBar.controller = function() {};

NavBar.view = function(ctrl) {
  return m('.app', [
    m('.header', [
      m('picture', {class: 'header-image clearfix'}, [
        m('source', {media: '(min-width: 915px)', srcset: 'assets/large-header.png'}),
        m('img', {src: 'assets/small-header.png', alt: 'BlueWater Energy Services, LLC'})
      ])
    ]),
    m('nav.clearfix', [
      m('hr'),
      m('ul', [
        m('li', [m('a',{class: 'navLink homeNav', href: '#/'}, 'Home')]),
        m('li', [m('a', {class: 'navLink servicesNav', href: '#/services'}, 'About Our Services')]),
        m('li', [m('a',{class: 'navLink aboutNav', href: '#/about'}, 'About Us')]),
        m('li', [m('a',{class: 'navLink quoteNav', href: '#/quote'}, 'Request A Quote')])
      ]),
      m('hr')
    ])
  ]);
};