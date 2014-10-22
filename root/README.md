# {%= name %}

> {%= description %}

## Getting started

### Installation
If you haven't already done so, install [Grunt](http://gruntjs.com) and [grunt-init](http://gruntjs.com/project-scaffolding):

``` bash
npm i -g grunt-cli grunt-init
```

Once `grunt-init` is installed, place this task in your `~/.grunt-init/` directory. It's recommended that you use `git clone` to install this template into that directory as follows:

```bash
git clone {%= repository %} ~/.grunt-init/{%= name %}
```

_(Windows users, see [the documentation](http://gruntjs.com/project-scaffolding#installing-templates) for the correct destination directory path)_

To force `grunt-init` to use custom default values, move the `defaults.json` file to your `~/.grunt-init/` directory, and customize the values in that file.

### Usage
```bash
# First create a directory for your new project
mkdir <{%= name %}-sample>
cd <{%= name %}-sample>

# Then run the following to scaffold project.
grunt-init {%= name %}
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first._

## Author
**[{%= author_name %}]({%= author_url %})**

## Copyright and license
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
***
Generated using [grunt-init-grunt-init]()
