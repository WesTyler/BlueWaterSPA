var About = exports = {};

About.controller = function(){};

About.view = function(){
  return m('div.container', [
      Nav.view(),
      m('div', {class: 'view'}, [
          m('.about-holder', [
              m('.people', [
                  m('h2.aboutHeader', 'Who We Are'),
                  m('p.about', 'Our Managers have more than 50 combined years of experience in the oil and gas services industry. That experience allows us to help evaluate the needs of each job and provide the best solutions possible.'),
              ]),
              m('.bios', [
                  m('h4.aboutPerson', 'Phillip Boren - President and Managing Partner'),
                  m('p.about', 'Phillip has 30 years oilfield experience with service company operations and management and holds a BS in geology. He has several years direct experience managing brine pits, double-lined with leak detection systems. Phillip served as Containment Service Line Manager for a large oilfield service company with 5 years direct experience managing secondary and primary containment installations and operations.')
              ])
          ])
      ]),
      Footer.view()
  ])
}