const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const chalk = require('chalk');

const create = async (name, options) => {
  const buildType = options.buildType || 'webpack';
  const template = options.template || 'react-ts';
  const templatePath = path.resolve(__dirname, `../template/${buildType}/${template}`)

  const root = process.cwd();
  const projectPath = path.resolve(root, `./${name}`);

  if(await fse.exists(projectPath)) {
    console.log(chalk.red('❌  The Dir has existed!'));
    return;
  } else {
    fs.mkdirSync(projectPath);
  }

  fse.copySync(templatePath, projectPath);
  console.log(chalk.greenBright('Create Successfully!'));
  console.log(chalk.green(`文件路径为：${projectPath}`));
}

module.exports = (...args) => {
  return create(...args);
}
