#!/usr/bin/env node

const takeoff = require('commander');
const glob = require('glob-promise');
const Path = require('path');
const shell = require('shelljs');

const init = async () => {
    // Do all the pre-plugin loading
    let pluginPaths = [];
    try {
        pluginPaths = await glob('**/*.js', { cwd: `${__dirname}/../plugins` });
    } catch (e) {
        throw e;
    }

    //console.log(pluginPaths);

    pluginPaths.forEach(pluginName => {
        const plugin = require(`${__dirname}/../plugins/${pluginName}`);
        const { command, args, group, handler, options, description } = plugin;

        takeoff
            .command(`${command}` + (args ? ` ${args}` : ''))
            .description(description)

        options.forEach(option => {
            takeoff.option(option.option, option.description)
        });

        takeoff.action((command, arg) => handler({command, arg}, shell));
    });

    

    takeoff.parse(process.argv);

    // takeoff
    //     .arguments('<file>')
    //     .option('-u, --username <username>', 'The user to authenticate as')
    //     .option('-p, --password <password>', "The user's password")
    //     .action(function(file) {
    //         console.log('user: %s pass: %s file: %s', takeoff.username, takeoff.password, file);
    //     })
    //     .parse(process.argv);

    return takeoff;
};

init();