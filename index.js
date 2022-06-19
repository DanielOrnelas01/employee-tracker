const { prompt } = require('inquirer');
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

        default:
            console.log("I do not recognize what your asking for!")
    }
})
}
init()

//view departments
function viewdepartment(){
     db.viewdepartments().then(data => {
                console.log('\n')
                console.table(data[0])
            }).then(()=> setTimeout(init,2000))
}

//view roles
function viewrole(){
    db.viewroles().then(data => {
               console.log('\n')
               console.table(data[0])
           }).then(()=> setTimeout(init,2000))
}

//view employees
function viewemployee(){
    db.viewemployees().then(data => {
               console.log('\n')
               console.table(data[0])
           }).then(()=> setTimeout(init,2000))
}

//add department prompt
function adddepartment() {
    prompt({
        type: 'input',
        name: "name",
        message: 'what is the new department name?'
    })
    db.adddepartments().then(data => {
        console.log('\n')
               console.table(data[0])
    })
}