# JavaScript Exercises

These JavaScript exercises are from The Odin Project (TOP). I have done them since their curriculum wanted me to do so.

## How To Check Results of Completed Exercises and Tests:

1. Fork and clone this repository. To learn how to fork a repository, see the GitHub documentation on how to [fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo). 
    * Copies of repositories on your machine are called clones. If you need help cloning to your local environment you can learn how from the GitHub documentation on [cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
2. Before you start working on any execises, you should first ensure you have the following installed:
    * **NPM**. You should have installed NPM already in our [Installing Node.js](https://www.theodinproject.com/lessons/foundations-installing-node-js) lesson. Just in case you need to check, type `npm --version` in your terminal. If you get back `Command 'npm' not found, but can be installed with:`, **do not follow the instructions in the terminal** to install with `apt-get` as this causes permission issues. Instead, go back to the installation lesson and install Node with NVM by following the instructions there.
    * **Jest**. After cloning this repository to your local machine and installing NPM, go into the newly created directory (`cd javascript-exercises`) and run `npm install`. This will install Jest and set up the testing platform based on our preconfigured settings.
3. Each exercise includes 3 files: a markdown file with a description of the task, an empty (or mostly empty) JavaScript file, and a set of tests. To complete an exercise, you'll need to go to the exercise directory with `cd exerciseName` in the terminal and run `npm test exerciseName.spec.js`. This should run the test file and show you the output.
4. Since I have done and checked the result of tests, every exercise should pass in every conditions.

**Note**: Due to the way Jest handles failed tests, it may return an exit code of 1 if any tests fail. NPM will interpret this as an error and you may see some `npm ERR!` messages after Jest runs. You can ignore these, or run your test with `npm test exerciseName.spec.js --silent` to supress the errors.
