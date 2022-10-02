const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const chalk = require('chalk');

const create = async (name, options) => {
  const { projectType } = await inquirer.prompt([
    {
      name: 'projectType',
      type: 'list',
      message: '请选择所要创建项目类型：',
      choices: [
        { name: 'react', value: 'react'}
      ]
    }
  ]);

  const { bundleType } =  await inquirer.prompt([
    {
      name: 'bundleType',
      type: 'list',
      message: '请选择所用的打包方式：',
      choices: [
        { name: 'webpack', value: 'webpack'},
        { name: 'vite', value: 'vite'}
      ]
    }
  ])

  const templatePath = path.resolve(__dirname, `../template/${options.ts ? 'ts/' : ''}${projectType}-${bundleType}`);
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
