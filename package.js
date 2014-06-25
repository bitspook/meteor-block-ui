Package.describe({
    summary: "Simple meteor style Block UI"
});

Package.on_use(function (api, where) {
    api.use(['templating', 'ui','handlebars', 'deps', 'session'], 'client');

    api.add_files([
        'lib/block_ui.css',
        'lib/block_ui.html',
        'lib/block_ui.js',
    ], 'client');

    api.export && api.export(['BlockUI']);
});
