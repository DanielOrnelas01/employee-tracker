const db = require('./connection')

class DB {
    constructor (connection) {
        this.connection = connection
    } 
   viewdepartments(){
      return db.promise().query('SELECT * FROM department');
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