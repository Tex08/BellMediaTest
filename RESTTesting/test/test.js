

var chakram = require('chakram');
expect = chakram.expect;

describe("RDS Request", function() {
	it("should return a JSON object", function() {
		return chakram.get("http://services.stats.hockey.rds.ca/nhl/?format=json")
		.then(function(response) {
			expect(response).to.have.status(200);
			expect(response).to.have.header("content-type", "application/json");
			var body = response.body;
			expect(isJson(body)).to.be.true;
		});
	});
	
	it("should contain 'National Hockey League' in the response", function() {
		return chakram.get("http://services.stats.hockey.rds.ca/nhl/?format=json")
		.then(function (response) {
			var body = response.body;
			var bodyStr = JSON.stringify(body);
			expect(bodyStr).to.include('National Hockey League');	
		});
	});
});


//In addition to check response header, this function will
//stringfy then parse the response body to make sure
//it's in JSON formatting. If it's not this should return false
//and the test will fail.
function isJson(str) {
    try {
    	var myJson = JSON.stringify(str);
      var parse = JSON.parse(myJson);
    } catch (e) {
        return false;
    }
    return true;
}
