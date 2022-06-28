#!/usr/bin/env node

const {program} = require('commander');

program
  .command('create <name>')
  .action(async (name) => {
      await require('../lib/create')(name)
    }
  )

program.parse();
