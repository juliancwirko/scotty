'use strict';

// this is an example of account transform after login
// you can configure it as you want

// you should fill these fields with your data - it is mandatory if you want to use Accounts email notifications
Accounts.emailTemplates.siteName = 'Scotty';
Accounts.emailTemplates.from = 'test@test.com';

Accounts.onCreateUser(function (options, user) {
    if (user.services.github) {

        user.username = user.services.github.username;
        user.emails = [];
        user.emails.push({
            address: user.services.github.email,
            verified: true
        });

        return user;

    }

    if (user.services.google) {

        user.username = user.services.google.email;
        user.emails = [];
        user.emails.push({
            address: user.services.google.email,
            verified: true
        });

        return user;

    }

    if (user.services.facebook) {

        user.username = user.services.facebook.email;
        user.emails = [];
        user.emails.push({
            address: user.services.facebook.email,
            verified: true
        });

        return user;
    }

    // there isn't e-mail here
    if (user.services.twitter) {

        user.username = user.services.twitter.screenName;
        return user;

    }

    return user;
});