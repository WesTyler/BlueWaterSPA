var Nav = {};

Nav.controller = function() {};

Nav.view = function() {
  return m('.navbar', [
    // m('.background-everything'),
    m('.header', [
      m('picture', {class: 'header-image clearfix'}, [
        m('source', {media: '(min-width: 915px)', srcset: 'assets/large-header.png'}),
        m('img', {src: 'assets/small-header.png', alt: 'BlueWater Energy Services, LLC'})
      ])
    ]),
    m('nav.clearfix', [
      m('ul', [
        m('li', [m('a',{class: 'navLink homeNav', href: '/', config: m.route}, 'Home')]),
        m('li', [m('a', {class: 'navLink servicesNav', href: '/services', config: m.route}, 'About Our Services')]),
        m('li', [m('a',{class: 'navLink aboutNav', href: '/about', config: m.route}, 'About Us')]),
        m('li', [m('a',{class: 'navLink quoteNav', href: '/quote', config: m.route}, 'Request A Quote')])
      ]),
    ])
  ]);
};