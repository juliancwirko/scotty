Router.map(function() {
    this.route('index.view', {
        path: '/',
        data: function () {
            Session.set('siteTitle', 'This is index view!');
            return {
                asideTestData: 'test test string',
                articleTestData: 'test test article'
            };
        }
    });
    this.route('subpage.view', {
        path: '/subpage',
        data: function () {
            Session.set('siteTitle', 'This is subpage view!');
            return {
                asideSubpageTestData: 'subpage test string',
                articleSubpageTestData: 'subpage test article'
            };
        }
    });
});