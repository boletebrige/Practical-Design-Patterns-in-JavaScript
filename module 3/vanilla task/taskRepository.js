// module pattern
var repo = function () {
    var db = {};

    // Getting data from database
    var get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'New task from db'
        }
    }

    // Saving data to database
    var save = function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }
     console.log('newing up task repo');
    // methods that module returns
    return {
        get: get,
        save: save
    }
}

module.exports = repo();