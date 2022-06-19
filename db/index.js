const db = require('./connection')

class DB {
    constructor(connection) {
        this.connection = connection
    }

    viewdepartments() {
        return db.promise().query('SELECT * FROM department');
    }

    viewroles() {
        return db.promise().query('SELECT * FROM role');
    }

    viewemployees() {
        return db.promise().query('SELECT * FROM employee');
    }

    adddepartments(answer) {
        return db.promise().query("INSERT INTO department SET ?", answer);
        
    }
}


module.exports = new DB(db)

// const it = {
//     connection: this.connection,
//     viewdpartments: function(){

//     }
// }
// it.viewdpartments()
// it.connection