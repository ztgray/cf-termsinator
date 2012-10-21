var express = require('express');

var app = express();

/** CONFIGS **/
var port = process.env.PORT || 3000;
/** /CONFIGS **/

app.use(express.bodyParser());

app.post('/api/accounts', function(req, res) {
	var result = {
		account_id: -1,
		status: "error"
	};
	
	res.send(JSON.stringify(result));
});

app.post('/api/domains', function(req, res) {
	var result = {
		domain_id: -1,
		status: "error"
	};
	
	res.send(JSON.stringify(result));	
});

app.listen(port, function() { 
    console.log('Termsinator running on ' + port);
});