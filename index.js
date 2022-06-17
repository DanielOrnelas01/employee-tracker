const { prompt } = require('inquirer');
// const { viewdepartments } = require('./db');
const db = require('./db')
require('console.table')


function init() {
    console.log('welcome to employee-tracker')
prompt({
    type: 'list',
    name: 'choice',
    message: 'what would you like to do?',
    choices: ['view all departments', ' view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
}).then(answer => {
    switch (answer.choice) {
        case 'view all departments':
            //code to run
           a()
            break;

        default:
            console.log("I do not recognize what your asking for!")
    }
})
}
init()

function a(){
     db.viewdepartments().then(data => {
                console.log('\n')
                console.table(data[0])
            }).then(()=> setTimeout(init,2000))
}