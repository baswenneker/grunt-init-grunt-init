# grunt-init-grunt-init

`grunt-init-grunt-init` is a [grunt-init](http://gruntjs.com/project-scaffolding) template to scaffold a `grunt-init` scaffolding task. The generated files are the starting point for your own `grunt-init` task.

## Getting started

### Installation
If you haven't already done so, install [Grunt](http://gruntjs.com) and [grunt-init](http://gruntjs.com/project-scaffolding):

``` bash
npm i -g grunt-cli grunt-init
```

Once `grunt-init` is installed, place this task in your `~/.grunt-init/` directory. It's recommended that you use `git clone` to install this template into that directory as follows:

```bash
git clone https://github.com/baswenneker/grunt-init-grunt-init.git ~/.grunt-init/grunt-init
```

_(Windows users, see [the documentation](http://gruntjs.com/project-scaffolding#installing-templates) for the correct destination directory path)_

To force `grunt-init` to use custom default values, move the `defaults.json` file to your `~/.grunt-init/` directory, and customize the values in that file.

### Usage

```bash
# First create a directory carrying the name of your new grunt-init task
mkdir <your-grunt-init-task-name>
cd <your-grunt-init-task-name>

# Then run the following to scaffold the grunt init task.
grunt-init grunt-init
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first._

## Author

**[Bas Wenneker](http://github.com/baswenneker)**

## Copyright and license
Copyright 2014 Bas Wenneker
[MIT License](LICENSE-MIT)
