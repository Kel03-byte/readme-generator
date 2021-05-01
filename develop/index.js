const inquirer = require('./node_modules/inquirer/lib/inquirer.js');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        validate: title => {
            if (!title) {
                return console.log("please enter a title for your project!")
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Give a description of your project:',
        name: 'description',
        validate: description => {
            if (!description) {
                return console.log("please enter a description of your project!")
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'How do people install your project (optional)?',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'What are the instructions to use the project (optional)?',
        name: 'usage',

    },
    {
        type: 'input',
        message: 'How can developers contribute to your project (optional)?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Tests your project (optional)?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'gitHubName',
        validate: gitHubName => {
            if (!gitHubName) {
                return console.log("please enter your gitHub username!")
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: email => {
            if (!email) {
                return console.log("please enter your email address!")
            } else {
                return true
            }
        }
    },
    {
        type: 'list',
        message: 'Which LICENSE are you going to use for your project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU', 'Boost', 'CCO', 'EPL', 'Mozilla', 'Unlicense']
    },
])
    .then((response) => {
        const { title, description, installation, usage, contributing, tests, gitHubName, email, license } = response;

        fs.writeFile("README.md", "# " + title + "\n"
            + "![image](https://img.shields.io/badge/License-" + license + "-blue.svg)\n"
            + "## Description\n" + description + "\n"
            + "## Table Of Contents\n"
            + "* [Installation](#installation)\n"
            + "* [Usage](#usage)\n"
            + "* [Contributing](#contributing)\n"
            + "* [Tests](#tests)\n"
            + "* [License](#license/s)\n"
            + "* [Questions](#questions)\n"
            + "## Installation\n"
            + installation + "\n"
            + "## Usage\n"
            + usage + "\n"
            + "## Contributing\n"
            + contributing + "\n"
            + "## Tests\n"
            + tests + "\n"
            + "## License\n"
            + "This project is licensed by " + license+ " license"
            + "\n ## Questions\n"
            + "Any questions or errors? Contact me at https://github.com/" + gitHubName + " or email me at " + email,
            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    }
    );
