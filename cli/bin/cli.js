#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');

program
  .command('create <name>')
  .option('--buildType <buildType>', 'project build type: webpack or vite')
  .option('--template <template>', 'project template: react / react-ts / vue')
  .action(async (name, options) => {
      await require('../lib/create')(name, options)
    }
  )

program.addHelpText('after',
`
Example:
  ${chalk.yellow('gowork create <name> --buildType <buildType> --template <template>')}
Now Support:
  ${chalk.yellow('- buildType: webpack or vite')}
  ${chalk.yellow('- template: react / react-ts / vue')}
`);

program.parse();
