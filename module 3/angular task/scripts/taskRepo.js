var app = angular.module('taskManager');

var taskRepo = function ($http) {
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

    // methods that module returns
    return {
        get: get,
        save: save
    }
}
app.service('TaskRepository', taskRepo);
