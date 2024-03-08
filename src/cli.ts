#!/usr/bin/env node

import { Command } from 'commander';
import convert from './main.js';
import * as fs from 'fs/promises';

const program = new Command();
program.name('w2m');
program.description('Convert Word documents to beautiful Markdown');
program
  .command('convert', { isDefault: true })
  .argument('<file>', 'The Word document to convert')
  .action(async (file: string) => {
    const md: string = await convert(file);
    await fs.writeFile('output.md', md);
    console.log('Markdown saved to output.md');
  });

program.parse();
