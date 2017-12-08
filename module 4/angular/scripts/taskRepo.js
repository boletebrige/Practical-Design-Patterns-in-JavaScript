var app = angular.module('taskManager');

var taskRepo = function ($http) {
    var called = 0;
    var db = {};

    // Getting data from database
    var get = function (id) {
        called++;
        console.log('Getting task ' + id + ' called ' + called + ' times.');
        return {
            name: 'Task ' + id
        }
    }

    // Saving data to database
    var save = function (task) {
        called++;
        console.log('Saving ' + task.name + ' to the db caalled ' + called + ' times.');
    }

    // methods that module returns
    return {
        get: get,
        save: save
    }
}
app.service('TaskRepository', taskRepo);
