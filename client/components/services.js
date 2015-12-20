var Services = exports = {};

Services.controller = function(){};

Services.view = function(){
  return m('div', {class: 'servicesView clearfix'}, [
      m('h3.aboutHeader', 'About BlueWater Services'),
      m('p.about', "This is the BlueWater service info copy." )
    ])
}