var Nav = {};

Nav.controller = function() {};

Nav.view = function() {
  return m('.navbar', [
    m('.header', [
      m('picture', {class: 'header-image clearfix'}, [
        m('source', {media: '(min-width: 1075px)', srcset: 'assets/large-header-2.png'}),
        m('img', {src: 'assets/small-header.png', alt: 'BlueWater Energy Services, LLC'})
      ])
    ]),
    m('nav.clearfix', [
      m('ul.nav-list-ul', [
        m('li.nav-list-li', [m('a',{class: 'navLink homeNav', href: '/', config: m.route}, 'Home')]),
        m('li.nav-list-li', [m('a', {class: 'navLink servicesNav', href: '/about', config: m.route}, 'About BlueWater')]),
        m('li.nav-list-li', [m('a',{class: 'navLink quoteNav', href: '/quote', config: m.route}, 'Request A Quote')])
      ]),
    ])
  ]);
};