const express = require('express');
const router = express.Router();

let failedRequestsCount = 0;

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		console.log("'/courses'");

		let coursesDB = server.db.getState().courses;

		if (req.query['textFragment'] === 'error' && failedRequestsCount <= 3) {
			failedRequestsCount++;
			res.status('500').send('Something went wrong');
		}

		let courses = req.query['textFragment'] ? coursesDB.filter((course) => {
			return course.title.toUpperCase().indexOf(req.query['textFragment'].toUpperCase()) >= 0;
		}) : coursesDB;

		courses = courses.slice(0, req.query['count']);

		res.json(courses);
	});

	router.post('/courses', (req, res, next) => {
		let coursesDB = server.db.getState().courses;
		coursesDB.push(req.body);
				
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
