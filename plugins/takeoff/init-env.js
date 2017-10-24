module.exports = {
    command: 'init',
    description: 'Creates a new environment container',
    options: [
        {
            option: '-b, --blueprintUrl',
            description: 'Pass a git repository as a url for a blueprint to begin the default with'
        }
    ],
    args: '<name> [blueprint-name]',
    group: 'takeoff',
    handler: async ({ takeoff, command, shell, cwd }) => {
        const folderName = takeoff.args[0];
        shell.echo(`Creating folder ${folderName}`);
        shell.mkdir('-p', `${folderName}`, { cwd });

        //console.log(results, takeoff);
        //const [folderName, blueprintName] = results;

        //console.log(folderName, blueprintName);

        //let blueprintName = results[1] || 'basic';
        //let blueprint = `https://github.com/takeoff-env/takeoff-blueprint-${blueprintName}.git`;
        //let blueprint = '../takeoff-blueprint-basic';
        //let environment = results[0] || 'takeoff';

        // shell.mkdir('-p', `envs/${environment}`);
        // const doClone = shell.exec(`git clone ${blueprint} envs/${environment} --depth 1`);
        // if (doClone.code !== 0) {
        //     shell.echo(`Error cloning ${blueprint}`, doClone.stdout);
        //     shell.exit(1);
        // }
        // shell.echo(`Cloned ${blueprint}`);

        // const envFile = require(`../../envs/${environment}/takeoff.config.js`)(environment);

        // envFile.forEach(command => {
        //     shell.echo(`[Takeoff]: ${command.message}`);
        //     const runCmd = shell.exec(command.cmd, { cwd: command.cwd, silent: true });
        //     if (runCmd.code !== 0) {
        //         shell.echo(`Error running ${command.cmd}`);
        //         shell.exit(1);
        //     }
        // });

        shell.exit(0);
    }
};
