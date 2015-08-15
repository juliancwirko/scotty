'use strict';

//
// config for s-id (scottyId) package https://github.com/juliancwirko/meteor-s-id
//
Meteor.startup(function () {
    sId.config({
        redirectPage: '/',
        registerForm: {
            mainClass: 's-id-register-form',
            title: 'Register',
            leadText: 'Hi, join us!',
            submitBtnLabel: 'Register'
        },
        loginForm: {
            mainClass: 's-id-login-form',
            title: 'Login',
            leadText: 'Beam me up, Scotty!',
            submitBtnLabel: 'Login'
        },
        forgotPassForm: {
            mainClass: 's-id-forgot-password-form',
            title: 'Forgot Password',
            leadText: 'Please fill in email address!',
            submitBtnLabel: 'Send New!'
        },
        resetPassForm: {
            mainClass: 's-id-reset-password-form',
            title: 'Reset Password',
            leadText: 'Please fill in new password!',
            submitBtnLabel: 'Set New!'
        },
        // turn on e-mail verification.. without it user is still able to login, you can block it in the app by
        // checking e-mail verified field
        emailVerification: true,
        // you can pass empty messages object to turn it off
        messages: {
            verifyEmail: 'Verify your e-mail address',
            verifiedEmail: 'Your email address was verified. Thanks!',
            somethingWrong: 'Something went wrong! Here is the error message: ',
            fillAllFields: 'Fill in all fields!',
            loginNow: 'You can login now.',
            sending: 'Sending...',
            validEmail: 'E-mail should be a valid e-mail address!',
            validPassword: 'Password should be at least one number, one lowercase and one uppercase letter and at least six characters!',
            validUsername: 'Username should be at least 3 characters long and max 12 characters!',
            // placeholders
            usernamePlaceholder: 'Username',
            passwordPlaceholder: 'Password',
            emailPlaceholder: 'E-mail',
            newPasswordPlaceholder: 'New password'
        },
        // should return true or false - you can overwrite these functions in your app sId config...
        // also remember to adjust your error messages (config above)
        validateUsername: function (username) {
            var min = 3;
            var max = 12;
            if (username && username.length >= min && username.length <= max) {
                return true;
            }
            return false;
        },
        validatePassword: function (password) {
            var r = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            if (password && r.test(password)) {
                return true;
            }
            return false;
        },
        validateEmail: function (email) {
            var r = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (r.test(email)) {
                return true;
            }
            return false;
        },
        onLogged: function () {
            var router = FlowRouter.current();
            if (router && router.route.name !== 'secretPage') {
                FlowRouter.go('/');
            }
        },
        onRegistered: function () {
            FlowRouter.go('/');
        },
        onForgotPassword: function () {
            sAlert.success('Email Sent. Check your mailbox.');
            Meteor.setTimeout(FlowRouter.go('/'), 3000);
        },
        onResetPassword: function () {
            sAlert.success('Password was changed!.');
            Meteor.setTimeout(FlowRouter.go('/'), 3000);
        },
        getPasswordResetToken: function () {
            return FlowRouter.getParam('resetToken');
        }
    });
});
