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
  return m('div', {class: 'servicesView clearfix'}, [
      m('.image', ctrl.selectedServiceImage()),
      m('h2.aboutHeader', 'About BlueWater Services'),
      m('h4.aboutItem', {onclick: function() {ctrl.toggleService('muscleWall')}}, 'Muscle Wall Secondary Containment', [
        function() {
          if (ctrl.selectedService() === 'muscleWall') {
            return m('.details', 'These are the details about Muscle Wall Secondary Containment');
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
            return m('.details', 'These are the details about Polyurea Sprayed Secondary Containment');
          }
        }()
      ])
    ])
}