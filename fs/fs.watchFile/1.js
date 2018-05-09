const fs = require('fs')
fs.watchFile('1.html', (curr, prev) => {
	console.log(`the current mtime is: ${curr.mtime}`)
	console.log(`the previous mtime was: ${prev.mtime}`)
})
