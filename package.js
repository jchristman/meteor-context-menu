Package.describe({
    name: 'jchristman:context-menu',
    summary: 'Meteor package to wrap a bootstrap context menu',
    version: '1.0.0',
    git: 'https://github.com/suntzuII/meteor-bootstrap-context-menu.git'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0.0');

    api.use('jquery');
    api.use('mizzao:bootstrap-3'); // Need this for the glyphicons

    api.addFiles('contextMenu.min.js','client');
    api.addFiles('contextMenu.css','client');
});
