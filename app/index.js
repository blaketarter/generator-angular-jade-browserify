'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'So you want an ' + chalk.red('angular thingamajig?')
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What\'s your project\'s name?',
        default: this.appname
      }
    ];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { projectName: this.projectName }
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copyTpl(
        this.templatePath('jade/_index.jade'),
        this.destinationPath('src/index.jade'),
        { }
      );

      this.fs.copyTpl(
        this.templatePath('jade/_header.jade'),
        this.destinationPath('src/template/_header.jade'),
        { projectName: this.projectName }
      );

      this.fs.copy(
        this.templatePath('jade/_outdated-browser.jade'),
        this.destinationPath('src/template/_outdated-browser.jade')
      );

      this.fs.copy(
        this.templatePath('js/'),
        this.destinationPath('src/js/')
      );

      this.fs.copy(
        this.templatePath('scss/'),
        this.destinationPath('src/scss/')
      );

      this.fs.copy(
        this.templatePath('images/'),
        this.destinationPath('src/images/')
      );
    },

    gruntFile: function () {
      var gruntConfig = {
      };

      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
    },

  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
