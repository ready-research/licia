#!/usr/bin/env node

var nopt = require('nopt'),
    path = require('path'),
    util = require('../lib/util');

var knowOpts = {
        karma: Boolean,
        silent: Boolean,
        all: Boolean,
        sauce: Boolean,
        html: Boolean
    },
    shortHands = {
        k: '--karma',
        s: '--silent',
        a: '--all',
        h: '--html'
    },
    options = nopt(knowOpts, shortHands, process.argv, 2),
    remain = options.argv.remain;

process.chdir(path.resolve(__dirname, '../'));
global.options = options;

var cmd = remain[0];

var LEGAL_COMMANDS = ['test', 'pack', 'update', 'benchmark', 'help'];

if (!util.contain(LEGAL_COMMANDS, cmd))
{
    require('../lib/help')();
} else
{
    remain.splice(0, 1);
    require('../lib/' + cmd)();
}