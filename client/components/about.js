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
                  m('p.about', 'Phillip has 30 years oilfield experience with service company operations and management and holds a BS in geology. He has several years direct experience managing brine pits, double-lined with leak detection systems. Phillip served as Containment Service Line Manager for a large oilfield service company with 5 years direct experience managing secondary and primary containment installations and operations.'),
                  m('h4.aboutPerson', 'Beth Boren - General Manager/Member'),
                  m('p.about', 'Beth has eight years of oilfield service experience in accounting, operations and management.  Beth has worked for two years directly managing containment services and executing jobs in the field.  She holds a masters degree in accounting and oversees the performance of the business.'),
                  m('h4.aboutPerson', 'John McKee - Director of Operations/Member'),
                  m('p.about', 'John brings ten years of oilfield experience to BlueWater with more than three years directly related to installing containment and managing containment crews.  He is knowledgable when it comes to the seaming of both LDPE and HDPE liner materials.  John has built containment for Shell, Devon, Atlas, Vitruvian, Unit Petroleum, Newfield, Sheridan, BNK, PetroQuest, Gorman-Phillips and Sundance.'),
                  m('h4.aboutPerson', 'Phil Koehn - Service Line Manager Spray Application'),
                  m('p.about', 'Phil has more than five years of experience with spray liners and polyurea application.  He has built 150+ tank battery containments in Oklahoma, Texas, New Mexico, Colorado, Arkansas and Wyoming.  His customers have included Laredo, Chesapeake, Devon, Noble, Bonanza Creek, COG, Apache, RKI, EOG, COP, Crownquest, DCP Midstream, Forland, Marathon and Atlas.')
              ])
          ])
      ]),
      Footer.view()
  ])
}