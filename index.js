const { prompt } = require('inquirer');
const Prompt = require('inquirer/lib/prompts/base');
const db = require('./db')
require('console.table')

//inital prompt
function init() {
    console.log('welcome to employee-tracker')
    prompt({
        type: 'list',
        name: 'choice',
        message: 'what would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }).then(answer => {
        switch (answer.choice) {
            case 'view all departments':
                //code to run
                viewdepartment()
                break;

            case 'view all roles':
                viewrole()
                break;

            case 'view all employees':
                viewemployee()
                break;

            case 'add a department':
                adddepartment()
                break;

            case 'add a role':
                addrole()
                break;

            default:
                console.log("I do not recognize what your asking for!")
        }
    })
}
init()

//view departments
function viewdepartment() {
    db.viewdepartments().then(data => {
        console.log('\n')
        console.table(data[0])
    }).then(() => setTimeout(init, 2000))
}

//view roles
function viewrole() {
    db.viewroles().then(data => {
        console.log('\n')
        console.table(data[0])
    }).then(() => setTimeout(init, 2000))
}

//view employees
function viewemployee() {
    db.viewemployees().then(data => {
        console.log('\n')
        console.table(data[0])
    }).then(() => setTimeout(init, 2000))
}

//add department prompt and data
function adddepartment() {
    prompt({
        type: 'input',
        name: "name",
        message: 'what is the new department name?'
    }).then(answer => {
        db.adddepartments(answer).then(answer => {
            viewdepartment();
        })
    })
}

//add role and data
function addrole() {
    prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what role do you want to add'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'what is the salary of this role?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'what department is this role in?',
            choices: ['IT', 'Finance & Accounting', 'Sales & Marketing', 'Operations']
}
    ]).then(answer => {
        db.addint(answer)
    })
    
    .then(answer => {
        db.addroles(answer).then(answer => {
            viewrole();
        })
    })
}
