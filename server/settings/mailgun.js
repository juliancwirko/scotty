'use strict';

// you need to provide yours mailgun (or smth else) config here

Meteor.startup(function () {
    process.env.MAIL_URL = process.env.MAIL_URL || 'smtp://postmaster@sandbox{...}.mailgun.org:{...}@smtp.mailgun.org:587';
});