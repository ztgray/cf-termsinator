var express = require('express');

var app = express();

/** CONFIGS **/
var port = process.env.PORT || 3000;
/** /CONFIGS **/

app.use(express.bodyParser());

app.post('/api/accounts', function(req, res) {
	console.log(req.body);
	
	var result = {
		account_id: -1,
		status: "error"
	};
	
	res.type('application/json');
	res.send(JSON.stringify(result));
});

app.post('/api/domains', function(req, res) {
	console.log(req.body);

	var result = {
		domain_id: -1,
		status: "error"
	};
	
	res.type('application/json');
	res.send(JSON.stringify(result));	
});

app.listen(port, function() { 
    console.log('Termsinator running on ' + port);
});