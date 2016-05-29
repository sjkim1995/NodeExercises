 var fs = require('fs');

 fs.readFile(process.argv[2], function (err, contents) {
 	 
 	 var arr = contents.toString().split('\n');
 	 console.log(arr.length - 1);
 });

 
