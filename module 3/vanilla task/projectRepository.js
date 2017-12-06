// module pattern
var repo = function () {
    var db = {};

    // Getting data from database
    var get = function (id) {
        console.log('Getting project ' + id);
        return {
            name: 'New project from db'
        }
    }

    // Saving data to database
    var save = function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }
     console.log('newing up project repo');
    // methods that module returns
    return {
        get: get,
        save: save
    }
}

module.exports = repo();