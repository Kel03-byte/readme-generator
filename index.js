const inquirer = require("./node_modules/inquirer/lib/inquirer.js");

function questions() {
    return inquirer.prompt([
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
            message: 'How would users install your project (optional)?',
            name: 'installation',

        },
        {
            type: 'input',
            message: 'How do users use your project (optional)?',
            name: 'usage',

        },
        {
            type: 'input',
            message: 'How can developers contribute to your project (optional)?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'How do developers test your project (optional)?',
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
            choices: ['MIT', 'Apache', 'GNU General Public', 'Boost Software', 'Creative Commons Zero', 'Eclipse Public', 'Mozilla Public', 'The Unlicense']
        },
    ])
        .then((response) => {
            const { title, description, installation, usage, contributing, tests, gitHubName, license, email, } = response
            console.log(title)
            console.log(description)
            console.log("How to install this project: " + installation)
            console.log("How to use this app: " + usage)
            console.log("Feel free to test this project " + tests)
            console.log("Feel free to contribute " + contributing)
            console.log("This project is licensed by " + license + " LICENSE")
            console.log(gitHubName)
            console.log("any questions please email me at " + email)
        }
        )
};

function createReadmeFile () {
    fs.writeFile("README.md", )
}

questions()