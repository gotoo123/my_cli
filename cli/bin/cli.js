#!/usr/bin/env node

const {program} = require('commander');

program
  .command('create <name>')
  .option('--buildType <buildType>', 'project build type: webpack or vite')
  .option('--template <template>', 'project template: react / react-ts / vue')
  .action(async (name, options) => {
      await require('../lib/create')(name, options)
    }
  )

program.parse();
