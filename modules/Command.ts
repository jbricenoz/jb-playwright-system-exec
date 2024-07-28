

export const Command = {
    docker_version: 'docker --version',
    docker_pull_image: 'docker pull public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest',
    docket_run: 'docker run --rm public.ecr.aws/l4q9w4c5/loanpro-calculator-cli',
    docker_start_mac: 'open -a Docker',
    docker_ps: 'docker ps'
}

export const mathMethod = {
    ADD: 'add',
    DIVIDE: 'divide',
    MULTIPLY: 'multiply',
    SUBTRACT: 'subtract',
};

export type MathMethod = (typeof mathMethod);
  