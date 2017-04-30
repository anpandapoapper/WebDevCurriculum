var http = require('http');
var url = require('url');
var querystring = require('querystring');
	// TODO: 이 곳을 채워넣으세요..!
http.createServer(function(req, res) {
	var parsedUrl = url.parse(req.url);
	var parsedQuery = querystring.parse(parsedUrl.query);
	console.log(parsedQuery);

	if ((req.method == 'GET' || req.method == 'POST' ) && parsedUrl.pathname == '/foo') {
		console.log("Hello, " + parsedQuery["bar"]);
	}
	res.end("<html><body>광진?</body></html>");
}).listen(8027);
