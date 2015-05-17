'use strict';

// check out FlowRouter: https://atmospherejs.com/meteorhacks/flow-router

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
