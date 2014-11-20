Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFoundPage',
    loadingTemplate: 'loadingPage',
    templateNameConverter: 'camelCase',
    routeControllerNameConverter: 'camelCase'
});

// helper functions
if (Meteor.isClient) {
    Router.onBeforeAction(function () {
        var title = Session.get('siteTitle');
        if (title) {
            document.title = title;
        }
        this.next();
    });
}