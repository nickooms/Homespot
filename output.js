var jf = require('jsonfile');
var util = require('util');
 
var file = './fing-output/discovery-output';
jf.readFile(file, function(err, obj) {
  console.log(util.inspect(obj))
});