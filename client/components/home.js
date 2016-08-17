var Home = exports = {};

Home.controller = function(){
    var ctrl                = this,
        serviceDescriptions = {
            slideshow : '',
            muscleWall: 'Muscle Wall',
            sprayOn   : 'Spray On Polyurea',
            driveOver : 'Drive Over'
        };

    ctrl.serviceDescription = m.prop('');

    ctrl.selectedService = m.prop('slideshow');
    ctrl.imageSet = {
        slideshow : ['drive-1', 'drive-2', 'drive-3', 'mw-1', 'mw-2', 'mw-3', 'mw-4', 'mw-5', 'spray-1', 'spray-2', 'spray-3'],
        muscleWall: ['mw-1', 'mw-2', 'mw-3', 'mw-4', 'mw-5'],
        sprayOn   : ['spray-1', 'spray-2', 'spray-3'],
        driveOver : ['drive-1', 'drive-2', 'drive-3']
    };
    ctrl.imgNumber = 0;
    ctrl.slidePrefix = 'slideshow';
    ctrl.displayImg = function() {
        return m('img', { src: '../assets/' + ctrl.imageSet[ctrl.selectedService()][ctrl.imgNumber] +'.png', width: '400', height: '400' });};
    ctrl.interval;

    var togglePhotoSlideShow = function() {
        if (ctrl.interval) {
            clearInterval(ctrl.interval);
        }

        ctrl.interval = setInterval(function() {
            ctrl.imgNumber++;
            if (ctrl.imgNumber > ctrl.imageSet[ctrl.selectedService()].length - 1) {
                ctrl.imgNumber = 0;
            }

            ctrl.serviceDescription(serviceDescriptions[ctrl.selectedService()]);

            m.redraw();
        }, 2000);
    };

    togglePhotoSlideShow();

    ctrl.toggleService = function(serviceName) {
      if (ctrl.selectedService() === serviceName) {
          togglePhotoSlideShow();
          ctrl.selectedService('slideshow');
      } else {
          togglePhotoSlideShow();
          ctrl.selectedService(serviceName);
      }
    };
};

Home.view = function(ctrl){
  return m('div.container', [
      Nav.view(),
      m('div', {class: 'view clearfix'}, [
          m('.image-holder', [
              ctrl.displayImg(),
              ctrl.serviceDescription()
          ]),
          m('.about-holder', [
              m('h2.home-description', 'At Bluewater we provide containment solutions for drilling, completions, and product operations.'),
              m('h3.home-description', 'Please select a service below to learn more.'),
              m('h4.aboutItem', {onclick: function() {ctrl.toggleService('muscleWall')}}, 'Muscle Wall Secondary Containment', [
                  function() {
                      if (ctrl.selectedService() === 'muscleWall') {
                          return m('.details', [
                              m('h4', 'Time is money and Muscle Wall saves both of those.'),
                              m('div', 'Muscle Wall was designed so that it can be quickly deployed.  Time is money for our clients so we want to be able to provide them with the most reliable product on the market that can be set up and taken down in as little time as possible.'),
                              m('br'),
                              m('div', 'The light weight of each wall coupled with the intuitive design allows Muscle Wall to be deployed and taken down with just a small team of workers and without the aid of heavy equipment.  A 2ft secondary containment big enough to house a standard frac tank can be set up in just 30 minutes.'),
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
              m('h4.aboutItem', {onclick: function() {ctrl.toggleService('sprayOn')}}, 'Polyurea Sprayed Secondary Containment', [
                  function() {
                      if (ctrl.selectedService() === 'sprayOn') {
                          return m('.details', 'Sprayed on polyurea offers a superior containment solution for all containment applications.  It can be custom built into any size facility or jobsite.  Polyurea\'s chemical resistance properties, tensile strength and durability surpass other liner options.');
                      }
                  }()
              ])
          ])
      ]),
      Footer.view()
    ])
};