var About = exports = {};

About.controller = function(){};

About.view = function(){
  return m('div', {class: 'aboutView clearfix'}, [
      m('h3.aboutHeader', 'About BlueWater'),
      m('p.about', "This is the BlueWater general info copy." ),
      m('h3.aboutHeader', 'About This Website'),
      m('p.about', "This site is a general information sharing site.")
    ])
}