Package.describe({
  summary: 'Jeet grid system for Meteor'
});

Npm.depends({
  "jeet": "5.3.0"
});

Package.on_use(function(api) {
    api.use('stylus', ['client']);
});