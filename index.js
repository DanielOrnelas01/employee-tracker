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
                viewdepartment().then(() => {
                    setTimeout(init, 2000)
                }

                )
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

            case 'add an employee':
                addemployee()
                break;

            default:
                console.log("I do not recognize what your asking for!")
        }
    })
}
init()

//view departments
function viewdepartment() {
    return db.viewdepartments().then(data => {
        console.log('\n')
        console.table(data[0])
        return data[0]
    })
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
    viewdepartment().then(departments => {
        // console.log(departments);
        const departmentchoices = []
        for (let i = 0; i < departments.length; i++) {
            departmentchoices.push({
                name: departments[i].name,
                value: departments[i].id
            })
        }
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
                choices: departmentchoices
            }
        ])


            .then(answer => {
                db.addroles(answer).then(answer => {
                    viewrole();
                })
            })
    })
}

//add employee and data
function addemployee() {
    viewdepartment().then(departments => {
        // console.log(departments);
        const departmentchoices = []
        for (let i = 0; i < departments.length; i++) {
            departmentchoices.push({
                name: departments[i].name,
                value: departments[i].id
            })
        }
        prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'what is the employees first name?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'what is the employees last name?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'what is employees salary?'
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'what is the employees role?',
                choices: departmentchoices
            },
            // {
            //     type: 'list',
            //     name: 'manager_id',
            //     message: 'who is the employees manager?',
            //     // choices: departmentchoices
            // }
        ])


            .then(answer => {
                db.addemployeees(answer).then(answer => {
                    viewemployee();
                })
            })
    })
}

