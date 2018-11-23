const express = require('express');
const router = express.Router();

let failedRequestsCount = 0;

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let textFragment = req.query['textFragment'];

		if (textFragment === 'error' && failedRequestsCount <= 3) {
			failedRequestsCount++;
			res.status('500').send('Something went wrong');
		}

		let coursesDB = server.db.getState().courses;
		let countToLoad = parseInt(req.query['countToLoad']);

		let courses = textFragment || textFragment == "" ? coursesDB.filter((course) => {
			return course.title.toUpperCase().indexOf(textFragment.toUpperCase()) >= 0;
		}) : coursesDB;

		courses = countToLoad ? courses.slice(0, countToLoad): coursesDB;

		res.json(courses);
	});

	router.get('/courses/:id', (req, res, next) => {
		let coursesDB = server.db.getState().courses;
		let courseItem = coursesDB.find((item)=> {
            return item.id === req.params.id;
		});
				
		res.json(courseItem);
	});

	router.post('/courses', (req, res, next) => {
		let coursesDB = server.db.getState().courses;
		coursesDB.push(req.body);
				
		res.json(server.db.getState().courses);
	});

	router.put('/courses', (req, res, next) => {
		let coursesDB = server.db.getState().courses;
		coursesDB.push(req.body);
		
		let index = coursesDB.findIndex((item)=> {
            return item.id === req.body.id;
        });

        coursesDB[index] = req.body; 

		res.json(server.db.getState().courses);
	});

	router.delete('/courses/:id', (req, res, next) => {
		let coursesDB = server.db.getState().courses;
		let index = coursesDB.findIndex((item)=> {
            return item.id === req.params.id;
		});
				
		server.db.getState().courses.splice(index, 1);
		res.json(server.db.getState().courses);
	});

	return router;
};
