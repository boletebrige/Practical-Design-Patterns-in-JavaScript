var taskHandler = require('./taskHandler');
var myrepo = require('./repo');
// beacause of module.exports = repo(); in Repo.js we don't need line below anymore
// var myrepo = repo();

myrepo.save('fromMain')
myrepo.save('fromMain')
myrepo.save('fromMain')
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();