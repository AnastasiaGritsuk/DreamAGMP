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
        let usersDB = server.db.getState().users;
        const creds = req.body;
        const username = creds.username;
        let user = usersDB.find((item)=> {
            return item.name === username;
        });
        
        if (user) {
            const token = uuid.v1();
            userMap[token] = username;
		    res.json(token);
        } else {
            return res.status(401).json({
                message: 'Incorrect login or password'
            });
        }
	});

	return router;
};
