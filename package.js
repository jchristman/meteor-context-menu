Package.describe({
    name: 'jchristman:context-menu',
    summary: 'Meteor package to wrap a bootstrap context menu',
    version: '1.1.2_4',
    git: 'https://github.com/suntzuII/meteor-bootstrap-context-menu.git'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');

    api.use('jquery');
    api.use('mizzao:bootstrap-3@3.3.1'); // Need this for the glyphicons

    api.addFiles('lib/context.js','client');
    api.addFiles('lib/context.css','client');

    api.export('context', 'client');
});
