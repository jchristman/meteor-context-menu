Package.describe({
    name: 'jchristman:context-menu',
    summary: 'Build context menus the meteor way.',
    version: '2.0.1',
    git: 'https://github.com/jchristman/meteor-context-menu.git'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.2');

    api.use('jquery');
    api.use('ecmascript');
    api.use('check');
    api.use('templating');
    api.use('reactive-var');
    api.use('gwendall:template-animations@0.2.2'); // Use for fade in and out
    api.use('natestrauser:animate-css@3.4.0');

    api.addFiles('context/context.js','client');
    api.addFiles('context/context.html','client');
    api.addFiles('context/context.css','client');
    api.addFiles('context/menu-template.html','client');
    api.addFiles('context/menu-template.js','client');
    api.addFiles('context/animate.js','client');
    api.addFiles('context/animate.css','client');

    api.export('Context', 'client');
});
