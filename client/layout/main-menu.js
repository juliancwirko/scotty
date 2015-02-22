Template.mainMenu.events({
    'click .js-logout': function (e) {
        e.preventDefault();
        Meteor.logout(function () {
            Session.set('sAlert', {
                condition: 'green',
                effect: 'stackslide',
                message: 'You have been logged out!',
                position: 'left-top'
            });
        });
    }
});