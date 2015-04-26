Template.mainMenu.events({
    'click .js-logout': function (e) {
        e.preventDefault();
        Meteor.logout(function () {
            sAlert.success('You have been logged out!', {effect: 'stackslide', position: 'top-left'});
        });
    }
});