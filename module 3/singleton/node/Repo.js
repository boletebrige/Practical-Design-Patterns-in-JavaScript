var repo = function () {
    var called = 0;

    var save = function (task) {
        called++;
        console.log('Saving ' + task + ' Called' + called + ' Times');
    }
    console.log('newing up task repo');
    return { save: save }
}
// executing function in module.exports and creating singleton of repository
module.exports = repo();
// or
// module.exports = new repo;