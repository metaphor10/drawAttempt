
/*
 * GET home page.
 */

var flights = require('../data');

var flight = require('../flight');

for(var number in flights) {
	flights[number] = flight(flights[number]);
}

exports.flight = function(req, res){
	var number = req.param('number');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		res.json(flights[number].getInformation());
	}
};

exports.arrived = function (req, res) {
	var number = req.param('number');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		flights[number].triggerArrive();
		res.json({status: 'done'});
	}
};

exports.list = function (req, res) {
	res.render('list', {
		title: 'All Flights', 
		flights: flights});
};
exports.draw=function(req, res){
	res.render('draw',{});
};
exports.main1=function(req, res){
	res.render('drawpage',{});
};
exports.britelite=function(req, res){
	res.render('britelie',{});
};
exports.sim=function(req, res){
	res.render('sim',{});
};