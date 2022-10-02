#!/usr/bin/env node

const {program} = require('commander');

program
  .command('create <name>')
  .option('--ts')
  .action(async (name, options) => {
      await require('../lib/create')(name, options)
    }
  )

program.parse();
