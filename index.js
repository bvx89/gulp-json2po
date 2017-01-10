'use strict';
const through = require('through2');
const PluginError = require('gulp-util').PluginError;
const File = require('gulp-util').File;
const converter = require('json2po');
const PLUGIN_NAME = 'json2po';

module.exports = (properties, filename) => {
	if (properties === undefined || properties === null) {
		properties = {};
	} else if (typeof properties === 'string' && filename === undefined){
		filename = properties;
		properties = {};
	}

	if (filename === undefined) {
		throw new Error('No filename specified');
	}

	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		try {
			const result = converter(file.contents.toString(), properties);
			this.push(new File({cwd: '', base: '', path: filename, contents: new Buffer(result)}));
			return cb();
		} catch (err) {
			this.emit('error', new PluginError(PLUGIN_NAME, err, {showStack: true}));
		}
	});
};
