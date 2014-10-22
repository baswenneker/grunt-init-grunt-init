/**
 * {%= name %}
 * {%= description %}
 * @url {%= homepage %}
 * @author {%= author_name %}
 * @version {%= version %}
 * @copyright Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * @license Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

// Basic template description.
exports.description = '{%= description%}';

// Template-specific notes to be displayed before question prompts.
exports.notes = '{%= notes %}';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// Template-specific notes to be displayed after question prompts.
exports.after = '{%= after %}';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('homepage'),
    init.prompt('repository'),
    init.prompt('description'),
    init.prompt('version', '0.1.0'),
    init.prompt('author_name'),
    init.prompt('author_url'),
    init.prompt('licenses')
    /*,{
      name: 'customYN',
      message: 'This is a custom Y/N question',
      default: 'Y/n'
    }*/
    /*,{
      name: 'anotherQuestion',
      message: 'Another question',
      default: 'none'
    }*/
  ], function(err, props) {
    
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    props.customYN = /y/i.test(props.customYN);
    if (!props.customYN) { /* something here */ }
    if (props.anotherQuestion === 'none') { props.anotherQuestion = ''; }

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};