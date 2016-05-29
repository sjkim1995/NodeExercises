var filter = require('./solution_filter.js')

filter(process.argv[2], process.argv[3], function (err, list) {
  if (error) {
  	console.log("Error");
  }
  list.forEach(function (file) {
    console.log(file)
  })
})
