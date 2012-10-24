var express = require('express');

var app = express();

/** CONFIGS **/
var port = process.env.PORT || 3000;
/** /CONFIGS **/

app.use(express.bodyParser());

app.post('/api/accounts', function(req, res) {
	console.log("ACCOUNTS " + req.body.account_id);
	console.log("ACCOUNTS " + req.body.email);
	
	var result = {
		account_id: -1,
		status: "error"
	};
	
	res.type('application/json');
	res.send(JSON.stringify(result));
});

app.post('/api/domains', function(req, res) {
	console.log("DOMAINS " + req.body.account_id);
	console.log("DOMAINS " + req.body.email);

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