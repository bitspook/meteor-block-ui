Package.describe({
    summary: "Simple meteor style Block UI"
});

Package.on_use(function (api, where) {
    api.use(['templating', 'ui','handlebars', 'deps', 'session'], 'client');

    api.add_files([
        'lib/block_ui.js',
        'lib/block_ui.css',
        'lib/templates.html',
        'lib/templates.js',
    ], 'client');

    api.export && api.export(['BlockUI']);
});
