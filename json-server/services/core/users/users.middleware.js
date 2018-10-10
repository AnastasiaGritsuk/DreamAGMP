const express = require('express');
const router = express.Router();
const basicAuthParser = require('basic-auth-parser');
const uuid = require('node-uuid');

let userMap = {};

module.exports = (server) => {

	router.post('/auth', (req, res, next) => {

		if (!req.header('Authorization')) {
			res.status(401).send('Unathorized!');
		}

		let token = uuid.v1();
		let creds = basicAuthParser(req.header.authorization);
		let username = creds.username;

		userMap[token] = username;
		res.json(token);
	});

	return router;
};
