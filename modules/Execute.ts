import { execSync, exec, spawn } from 'child_process';
import { Command, MathMethods, methods } from './Command';

export class Execute {


    constructor() {
    }

    /***
     *  Arguments: cmd => Command line arguments to execute.
     * */
    command = async (cmd: string) => await execSync(cmd).toString();

    delay = async (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    isDockerInstallationPresent = async () => {
        let isDockerPresent: any = (await this.command(Command.docker_version)).toString();
        return isDockerPresent;
    }
    isDockerDaemonActive = async () => {
        let isDockerDaemonActive: any = (await this.command(Command.docker_ps)).toString();
        return isDockerDaemonActive;
    }

    dockerStart = async () => {
        let command = await this.command(Command.docker_start_mac);
        if ((command == null) || (command == undefined)) {
            this.delay(3000);
            return true;
        }
        this.delay(3000);
        return false;
    }

    isDockerImagePulled = async () => {
        let pullImage: any = (await this.command(Command.docker_pull_image)).toString();
        if (!(pullImage == null) || !(pullImage == undefined) || (pullImage.includes("What's Next?"))) {
            this.delay(3000);
            return true;
        }
        this.delay(3000);
        return false;
    }

    dockerCalculate = async (paramOne: number, paramTwo: number, func: MathMethods) => {
        let result: any = (await this.command(`${Command.docket_run} ${func} ${paramOne} ${paramTwo}`)).toString();
        return parseInt(((result.toString()).trim()).split(':')[1].trim());
    }
}
