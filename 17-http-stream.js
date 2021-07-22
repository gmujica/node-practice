/** @format */

let http = require("http");
let fs = require("fs");

http
	.createServer(function (req, res) {
		const text = fs.readFileSync("./content/big.txt");
	})
	.listen(5000);
