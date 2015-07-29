'use strict';

// helper meta tags functions used in Flow Router action functions

var clearMetaTags = function () {
    Meta.setTitle('');
    Meta.unset('og:title');
    Meta.unset('og:description');
    Meta.unset('og:url');
    Meta.unset('og:image');
    Meta.unset('twitter:title');
    Meta.unset('twitter:description');
    Meta.unset('twitter:url');
    Meta.unset('twitter:image');
};

var setMetaTags = function (url, title, desc, image) {
    Meta.setTitle(title);
    Meta.set({
        name: 'name',
        property: 'description',
        content: desc
    });

    Meta.set('og:title', title);
    Meta.set('og:description', desc);
    Meta.set('og:url', url);
    Meta.set('og:image', image);

    Meta.set({
        name: 'name',
        property: 'twitter:card',
        content: 'summary'
    });
    Meta.set({
        name: 'name',
        property: 'twitter:title',
        content: title
    });
    Meta.set({
        name: 'name',
        property: 'twitter:description',
        content: desc
    });
    Meta.set({
        name: 'name',
        property: 'twitter:url',
        content: url
    });
    Meta.set({
        name: 'name',
        property: 'twitter:image',
        content: image
    });
};

// we use here global triggers for Flow Router to clear meta tags using Blaze Meta package
FlowRouter.triggers.enter([clearMetaTags]);

// check out FlowRouter: https://atmospherejs.com/meteorhacks/flow-router

FlowRouter.route('/', {
    name: 'indexView',
    subscriptions: function () { // params
        // example: this.register('indexSubs', Meteor.subscribe('indexDemo'));
    },
    action: function () { // params
        BlazeLayout.render('layout', {main: 'indexView'});
    }
});

FlowRouter.route('/subpage', {
    name: 'subpageView',
    subscriptions: function () { // params
        // example: this.register('subpageSubs', Meteor.subscribe('subpageDemo', params.subId));
    },
    action: function () { // params
        var currentUrl = Meteor.absoluteUrl() + this.path.substring(1);
        var currentTitle = 'Demo subpage title';
        var currentDescription = 'Demo subpage description';
        var currentImage = '';

        // see more in the client/settings/seo.js
        // you can also unset your meta by Meta.unset('og:title');
        // you can unset your all metatags using Flow Router triggers (like we did here using global triggers ...above)

        setMetaTags(currentUrl, currentTitle, currentDescription, currentImage);

        BlazeLayout.render('layout', {main: 'subpageView'});
    }
});

FlowRouter.route('/secret', {
    name: 'secretPage',
    subscriptions: function () { // params
        // example: this.register('subpageSubs', Meteor.subscribe('subpageDemo', params.subId));
    },
    action: function () { // params
        var currentUrl = Meteor.absoluteUrl() + this.path.substring(1);
        var currentTitle = 'Demo secret title';
        var currentDescription = 'Demo secret description';
        var currentImage = '';

        setMetaTags(currentUrl, currentTitle, currentDescription, currentImage);

        BlazeLayout.render('layout', {main: 'secretPage'});
    }
});

// not found route

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function () {

    },
    action: function () {
        BlazeLayout.render('layout', {main: 'notFoundPage'});
    }
};

// sId routes config
FlowRouter.route('/login', {
    name: 'sIdLoginView',
    action: function () {
        BlazeLayout.render('layout', {main: 'sIdLoginView'});
    }
});
FlowRouter.route('/register', {
    name: 'sIdRegisterView',
    action: function () {
        BlazeLayout.render('layout', {main: 'sIdRegisterView'});
    }
});
FlowRouter.route('/forgot-password', {
    name: 'sIdForgotPasswordView',
    action: function () {
        BlazeLayout.render('layout', {main: 'sIdForgotPasswordView'});
    }
});
FlowRouter.route('/reset-password', {
    name: 'sIdResetPasswordView',
    action: function () {
        BlazeLayout.render('layout', {main: 'sIdResetPasswordView'});
    }
});
