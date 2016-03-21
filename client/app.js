m.route.mode = 'hash';

m.route(document.body, '/home', {
  '/home': Home,
  '/services': Services,
  '/about': About,
  '/quote': QuotePage
});