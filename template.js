/**
 * grunt-init-grunt-init
 * A `grunt-init` task to scaffold a `grunt-init` task.
 * @url https://github.com/baswenneker/grunt-init-grunt-init
 * @author Copyright (c) 2014 Bas Wenneker
 * @license Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'A `grunt-init` task to scaffold a `grunt-init` task.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),{
      name: 'rename',
      message: 'Does your task need a rename.json file?',
      default: 'Y/n',
      warning: 'If yes, a rename.json file is copied.'
    },{
      name: 'notes',
      message: 'Template-specific notes to be displayed before question prompts',
      default: 'none'
    },{
      name: 'after',
      message: 'Template-specific notes to be displayed after question prompts',
      default: 'none'
    },
    init.prompt('homepage'),
    init.prompt('repository'),
    init.prompt('version', '0.1.0'),
    init.prompt('author_name'),
    init.prompt('author_url'),
    init.prompt('licenses')
  ], function(err, props) {
    
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Check whether or not rename.json should be copied.
    props.rename = /y/i.test(props.rename);
    if (!props.rename) { delete files['rename.json']; }
    if (props.notes === 'none') { props.notes = ''; }
    if (props.after === 'none') { props.after = ''; }
    
    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};