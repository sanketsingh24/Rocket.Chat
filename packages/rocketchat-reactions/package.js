Package.describe({
	name: 'rocketchat:reactions',
	version: '0.0.1',
	summary: '',
	git: '',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'templating',
		'rocketchat:lib',
		'rocketchat:theme',
		'rocketchat:ui',
	]);
	// api.use('ecmascript');
	// api.use('templating');
	// api.use('rocketchat:lib');
	// api.use('rocketchat:theme');
	// api.use('rocketchat:ui');
api.mainModule('client/index.js', 'client');
api.mainModule('server/index.js', 'server');

	// api.addFiles('client/stylesheets/reaction.css', 'client');
	// api.addFiles('client/init.js', 'client');

	// api.addFiles('server/models/Messages.js');
	// api.addFiles('server/models/Rooms.js');
	// api.addFiles('client/methods/setReaction.js', 'client');
	// api.addFiles('server/setReaction.js', 'server');
});
