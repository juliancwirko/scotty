
//////////////////////////////////////////////////////////
// index view controller
//////////////////////////////////////////////////////////
indexViewController = RouteController.extend({
    data: function () {
        if (Meteor.isClient) {
            Session.set('siteTitle', 'This is index view!');
        };
        return {
            asideTestData: 'test test string',
            articleTestData: 'test test article'
        };
    }
});

//////////////////////////////////////////////////////////
// subpage view controller
//////////////////////////////////////////////////////////
subpageViewController = RouteController.extend({
    data: function () {
        if (Meteor.isClient) {
            Session.set('siteTitle', 'This is subpage view!');
        };
        return {
            asideSubpageTestData: 'subpage test string',
            articleSubpageTestData: 'subpage test article'
        };
    }
});