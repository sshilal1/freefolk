var express = require('express');
var app = express();
var mongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://dev-shil.ddns.net:27017/mydb";

app.use(express.static('public_html'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req,res) {
	res.sendFile('public_html/index.html', { root: __dirname})
});

app.post('/reservation', function (req,res) {
	var myobj = req.body;
	console.log("Attempting to add reservation for", myobj);
	addReservation(myobj)
	.then(function(result) {
		res.send(result);
	})
})

var addItem = (gear,type) => {
	return new Promise((resolve,reject) => {
		mongoClient.connect(dbUrl, function(err, db) {
		  if (err) reject(err);
		  db.collection(type).insertOne(gear, function(err, res) {
		    if (err) reject(err);
		    console.log('successfully added to !' + type);
		    getTable(type)
				.then((data) => {
					resolve(data);
				})
		  });
		});
	})
}
var getTable = function(type) {
	return new Promise((resolve,reject) => {
		mongoClient.connect(dbUrl, function(err, db) {
			if (err) reject(err);
			var mycollection = db.collection(type).find();
		  var myObjs = [];
		  mycollection.each(function(err, item) {
		  	if (item==null) {
					db.close();
					console.log(myObjs);
		  		resolve(myObjs);
		  	}
		  	else {
		  		myObjs.push(item);
		  	}
		  })
		})
	})
}

app.get('/gear', function (req,res) {
	console.log("Request for all gear...");
	getTable("helmets")
	.then(function(result) {
		res.send(result);
	})
})

app.post('/gear', function (req,res) {
	var myobj = req.body;
	var noAdd = false;
	console.log("Attempting to add gear: ", myobj);
	getTable("gear")
	.then(function(res){
		console.log(res);
		for(var item of res) {
			console.log(item);
			if (item.name.toLowerCase() === myobj.name.toLowerCase()) {
				console.log("Failed to enter, found entry for", myobj.name);
				noAdd = true;
			}
		}
	})
	.then(function(result) {
		if (!noAdd) {
			addItem(myobj,"gear")
			.then(function(result) {
				res.send(result);
			})
		}
	})
})

app.get('/codes', function (req,res) {
	console.log("Request for all codes...");
	getTable("codes")
	.then(function(result) {
		res.send(result);
	})
})

app.post('/code', function (req,res) {
	var myobj = req.body;
	console.log("Attempting to add code: ", myobj);
	addItem(myobj,"codes")
	.then(function(result) {
		res.send(result);
	})
})

app.put('/reservation', function (req,res) {
	var myobj = req.body;
	console.log("Attempting to update reservation for", myobj);
	updateReservation(myobj)
	.then(function(result) {
		res.send(result);
	})
})

app.delete('/reservation/:id', function (req,res) {
	var myobj = { id : req.params.id };
	console.log("Attempting to remove reservation for", myobj);
	removeReservation(myobj)
	.then(function(result) {
		res.send(result);
	})
})

app.listen(3010, function() {
	console.log("listening on port 3010");
})