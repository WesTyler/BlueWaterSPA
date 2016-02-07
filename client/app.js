m.route.mode = 'hash';

m.route(document.getElementById('content-holder'), '/', {
    '/': Home,
    '/services': Services,
    '/about': About,
    '/quote': QuotePage
});