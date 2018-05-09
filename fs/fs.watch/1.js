const fs = require('fs')
fs.watch('./1.html', {}, (eventType, filename) => {
	console.log(`eventType:${eventType};filename:${filename}`)
})
