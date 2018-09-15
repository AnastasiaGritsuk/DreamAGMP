const express = require('express');
const router = express.Router();

let failedRequestsCount = 0;

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let coursesDB = server.db.getState().courses;

		if (req.query['textFragment'] === 'error' && failedRequestsCount <= 3) {
			failedRequestsCount++;
			res.status('500').send('Something went wrong');
		}

		let courses = req.query['textFragment'] ? coursesDB.filter((course) => {
			return course.title.toUpperCase().indexOf(req.query['textFragment'].toUpperCase()) >= 0;
		}) : coursesDB;

		let count = parseInt(req.query['countToLoad']);

		courses = req.query['countToLoad'] ? 
			courses.slice(0, count)
			: coursesDB;

		res.json(courses);
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
