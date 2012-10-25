var express = require('express');

var app = express();

/** CONFIGS **/
var port = process.env.PORT || 3000;
/** /CONFIGS **/

app.use(express.bodyParser());

app.post('/api/accounts', function(req, res) {
	console.log('ACCOUNTS ' + req.body.account_id);
	
	var result = {
		account_id: -1,
		status: "error"
	};
	if (req.body.account_id) {
		result.account_id = req.body.account_id;
		result.status = 'approve';
	}
	
	res.type('application/json');
	res.send(JSON.stringify(result));
});

app.post('/api/domains', function(req, res) {
	console.log('DOMAINS ' + req.body.domain_id);

	var result = {
		domain_id: -1,
		status: "error"
	};

	if (req.body.domain_id) {
		result.domain_id = req.body.domain_id;
		result.status = 'approve';
	}
	
	res.type('application/json');
	res.send(JSON.stringify(result));	
});

app.use('/static', express.static(__dirname + '/static'));

app.listen(port, function() { 
    console.log('Termsinator running on ' + port);
});