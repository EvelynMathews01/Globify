const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('./'));
app.post('/server', function (req, res) {
	console.log('req', req.body);
	let r = `
			<html>
			<style>
			* {
				font-family: monospace;
			}
			</style>
			<body>`;

	// HEADERS
	r += '<h2>HEADERS:</h2><table border="1"><tr><th>KEY</th><th>VALUE</th></tr>';

	Object.keys(req.headers).forEach((key, value)=>{
		let header = req.headers[key];
		// console.log('headers', key, header);
		r += `<tr><td>${key}</td><td>${header}</td></tr>`
	});

	r += '</table>';
	//

	// QUERYSTRING
	r += '<br><h2>QUERYSTRING:</h2><table border="1"><tr><th>KEY</th><th>VALUE</th></tr>';
	Object.keys(req.query).forEach((key, value)=>{
		let query = req.query[key];
		// console.log('query', key, query);
		r += `<tr><td>${key}</td><td>${query}</td></tr>`
	});

	r += '</table>';
	//


	// PAYLOAD
	r += '<br><h2>PAYLOAD:</h2><table border="1"><tr><th>KEY</th><th>VALUE</th></tr>';

	Object.keys(req.body).forEach((key, value)=>{
		let payload = req.body[key];
		// console.log('body', key, payload);
		r += `<tr><td>${key}</td><td>${payload}</td></tr>`
	});

	r += '</table>';
	//


	r += `
		</body>
		</html>`;
	res.send(r);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

