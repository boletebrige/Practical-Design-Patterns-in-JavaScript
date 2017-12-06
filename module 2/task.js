// var task = {};
// var task = Object.create(Object.prototype);

var task = {
    title : 'My task',
    description : 'Task Description'
};
Object.defineProperty(task, 'toString', {
   value:  function (){
       return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

var urgentTask = Object.create(task); 
Object.defineProperty(urgentTask, 'toString', {
    value:  function (){
        return this.title + ' is urgent';
     },
     writable: false,
     enumerable: false,
     configurable: false
 });
console.log(urgentTask.toString());
/*
function ObjectName(param1, param2){
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function () {
        return this.param1 + ' ' + this.param2;
    }
}
*/