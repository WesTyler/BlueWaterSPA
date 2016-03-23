var Services = exports = {};

Services.controller = function(){
  var ctrl = this;

  ctrl.selectedService = m.prop('');

  ctrl.toggleService = function(serviceName) {
    if (ctrl.selectedService() === serviceName) {
      ctrl.selectedService('');
    } else {
      ctrl.selectedService(serviceName);
    }
  };

  ctrl.selectedServiceImage = function() {
    switch(ctrl.selectedService()) {
      case 'muscleWall':
        return m('.img', 'Muscle Wall Image');
      case 'driveOver':
        return m('.img', 'Drive Over Image');
      case 'polyUrea':
        return m('.img', 'Polyurea Image');
    }

    return m('.img', 'No Selected Service To Show.');
  };
};

Services.view = function(ctrl){
  return m('div', [
    Nav.view(),
    m('div', {class: 'view clearfix'}, [
      m('.image', ctrl.selectedServiceImage()),
      m('h2.aboutHeader', 'About BlueWater Services'),
      m('h4.aboutItem', {onclick: function() {ctrl.toggleService('muscleWall')}}, 'Muscle Wall Secondary Containment', [
        function() {
          if (ctrl.selectedService() === 'muscleWall') {
            return m('.details', [
              m('h4', 'Time is money and Muscle Wall saves both of those.'),
              m('div', 'Muscle Wall was designed so that it can be quickly deployed.  Time is money for our clients so we want to be able to provide them with the most reliable product on the market that can be set up and taken down in as little time as possible.'),
              m('br'),
              m('div', 'The lightweight of each wall coupled with the intuitive design allows Muscle Wall to be deployed and taken down with just a small team of workers and without the aid of heavy equipment.  A 2ft secondary containment big enough to house a standard frac tank can be set up in just 30 minutes.'),
              m('br'),
              m('br'),
              m('h4', 'Keep the environment in mind with Muscle Wall.'),
              m('div', 'Muscle Wall was designed with the environment in mind.  By using Muscle Wall as secondary containment, negative impacts to the environment, such as erosion or soil and water contamination, are greatly reduced.')
            ]);
          }
        }()
      ]),
      m('h4.aboutItem', {onclick: function() {ctrl.toggleService('driveOver')}}, 'Drive Over Containment with Liner', [
        function() {
          if (ctrl.selectedService() === 'driveOver') {
            return m('.details', 'These are the details about Drive Over Containment with Liner');
          }
        }()
      ]),
      m('h4.aboutItem', {onclick: function() {ctrl.toggleService('polyUrea')}}, 'Polyurea Sprayed Secondary Containment', [
        function() {
          if (ctrl.selectedService() === 'polyUrea') {
            return m('.details', 'Sprayed on polyurea offers a superior containment solution for all containment applications.  It can be custom build into any size facility or jobsite.  Polyurea\'s chemical resistance properties, tensile strength and durability surpass other liner options.');
          }
        }()
      ])
    ]),
    Footer.view()
  ])
}