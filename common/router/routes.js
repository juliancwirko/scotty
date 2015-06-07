'use strict';

// check out FlowRouter: https://atmospherejs.com/meteorhacks/flow-router

var clearMetaTags = function () {
    Meta.setTitle('');
    Meta.unset('og:title');
    Meta.unset('og:description');
};

// we use here global triggers for Flow Router to clear meta tags using Blaze Meta package
FlowRouter.triggers.enter([clearMetaTags]);

FlowRouter.route('/', {
    name: 'indexView',
    subscriptions: function () { // params
        // example: this.register('indexSubs', Meteor.subscribe('indexDemo'));
    },
    action: function () { // params
        FlowLayout.render('layout', {main: 'indexView'});
    }
});

FlowRouter.route('/subpage', {
    name: 'subpageView',
    subscriptions: function () { // params
        // example: this.register('subpageSubs', Meteor.subscribe('subpageDemo', params.subId));
    },
    action: function () { // params
        var pageTitle = 'This is subpage view title';

        // see more in the client/settings/seo.js
        // you can also unset your meta by Meta.unset('og:title');
        // you can unset your all metatags using Flow Router triggers (like we did here using global triggers ...above)

        Meta.setTitle(pageTitle); // you get: <title>This is subpage view title | Aye, That's me</title>
        Meta.set('og:title', pageTitle); // you get: <meta property="og:title" content="This is subpage view title">
        Meta.set('og:description', 'This is subpage view title'); // you get: <meta property="og:description" content="This is subpage view title">

        FlowLayout.render('layout', {main: 'subpageView'});
    }
});

FlowRouter.route('/secret', {
    name: 'secretPage',
    subscriptions: function () { // params
        // example: this.register('subpageSubs', Meteor.subscribe('subpageDemo', params.subId));
    },
    action: function () { // params
        FlowLayout.render('layout', {main: 'secretPage'});
    }
});

// not found route

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function () {

    },
    action: function () {
        FlowLayout.render('layout', {main: 'notFoundPage'});
    }
};

// sId routes config
FlowRouter.route('/login', {
    name: 'sIdLoginView',
    action: function () {
        FlowLayout.render('layout', {main: 'sIdLoginView'});
    }
});
FlowRouter.route('/register', {
    name: 'sIdRegisterView',
    action: function () {
        FlowLayout.render('layout', {main: 'sIdRegisterView'});
    }
});
FlowRouter.route('/forgot-password', {
    name: 'sIdForgotPasswordView',
    action: function () {
        FlowLayout.render('layout', {main: 'sIdForgotPasswordView'});
    }
});
FlowRouter.route('/reset-password', {
    name: 'sIdResetPasswordView',
    action: function () {
        FlowLayout.render('layout', {main: 'sIdResetPasswordView'});
    }
});
