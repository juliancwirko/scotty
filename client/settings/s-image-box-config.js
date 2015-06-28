'use strict';

Meteor.startup(function () {

    sImageBox.config({
        originalHeight: false, // image will be responsive you can enable original height
        originalWidth: false, // image will be responsive you can enable original width
        animation: 'zoomIn' //image entry animation (scale, fadeIn, zoomIn, slideInDown)
    });

});
