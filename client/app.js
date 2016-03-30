m.route.mode = 'hash';

m.route(document.body, '/home', {
  '/home': Home,
  '/about': About,
  '/quote': QuotePage
});