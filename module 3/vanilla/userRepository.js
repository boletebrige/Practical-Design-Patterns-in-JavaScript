// module pattern
var repo = function () {
    var db = {};

    // Getting data from database
    var get = function (id) {
        console.log('Getting user ' + id);
        return {
            name: 'New user from db'
        }
    }

    // Saving data to database
    var save = function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }
     console.log('newing up user repo');
    // methods that module returns
    return {
        get: get,
        save: save
    }
}

module.exports = repo();