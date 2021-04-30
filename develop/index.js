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
        message: 'What is your email address so developers and users can contact you for any questions?',
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
        type: 'checkbox',
        message: 'Which LICENSE are you going to use for your project (check all that apply)?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU General Public', 'Boost Software', 'Creative Commons', 'Eclipse Public', 'Mozilla Public', 'The Unlicense']
    },
])
    .then((response) => {
        const { title, description, installation, usage, contributing, tests, gitHubName, email, license } = response;

        function createLicenseBadge(license) {
            if (license === 'MIT') {
                return "![image](https://img.shields.io/badge/License-MIT-blue.svg)(https://opensource.org/licenses/MIT)";
            }

            if (license === 'Boost Software') {
                return "![image](https://img.shields.io/badge/License-Boost%20Software%201.0-blue.svg)(https://www.boost.org/LICENSE_1_0.txt)";
            }

            if (license === 'GNU General Public') {
                return "![image](https://img.shields.io/badge/License-GPL%20v2-blue.svg)(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
            }

            if (license === 'Apache') {
                return "![image](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)";
            }

            if (license === 'Creative Commons') {
                return "![image](https://img.shields.io/badge/License-CC0%201.0-blue.svg)(http://creativecommons.org/publicdomain/zero/1.0/)";
            }

            if (license === 'Eclipse Public') {
                return "![image](https://img.shields.io/badge/License-EPL%202.0-blue.svg)(https://opensource.org/licenses/EPL-2.0)";
            }

            if (license === 'Mozilla Public') {
                return "![image](https://img.shields.io/badge/License-MPL%202.0-blue.svg)(https://opensource.org/licenses/MPL-2.0)";
            }

            if (license === 'The Unlicense') {
                return "![image](https://img.shields.io/badge/License-Unlicense-blue.svg)(http://unlicense.org/)";
            }
            return license.join(' ')
        }

        fs.writeFile("README.md", "# " + title + "\n"
            + createLicenseBadge(license) + "\n"
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
            + "## License/s\n"
            + "This project is licensed by " + license.join(', ') + " license/s"
            + "\n ## Questions\n"
            + "Any questions or errors? Contact me at https://github.com/" + gitHubName + " or email me at " + email,
            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    }
    );
