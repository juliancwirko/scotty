//
// config for s-id (scottyId) package https://github.com/juliancwirko/meteor-s-id
// 
Meteor.startup(function () {
    scottyId.config({
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
        }
    });
});