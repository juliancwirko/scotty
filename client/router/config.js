Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFoundPage',
    loadingTemplate: 'loadingPage',
    templateNameConverter: 'camelCase',
    routeControllerNameConverter: 'camelCase'
});

// helper functions
Router.onBeforeAction(function () {
    var title = Session.get('siteTitle');
    if (title) {
        document.title = title;
    }
    this.next();
});
