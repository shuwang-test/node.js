const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
let data = fs.readFileSync('./1.html', 'utf-8')
// console.log(data)
fs.readFile('./1.html', 'utf-8', function(error, data) {
	if (error) {
	} else {
		let dom = new JSDOM(data)
		let body = dom.window.document.querySelector('body')
		console.log(body)
		body.style.color = 'red'
		console.log(data, dom.serialize())
		fs.writeFile('./2.html', dom.serialize(), function(error) {
			if (error) {
				console.log(error)
			}
		})
	}
})
