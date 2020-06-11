var express = require("express"),
	http = require("http"),
	app = express(),
	toDos = [];
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);
// Этот маршрут замещает наш файл
// todos.json в примере из части 5
app.get("/todos.json", function (req, res) {
	res.json(toDos);
});
// командуем Express принять поступающие
// объекты JSON
app.use(express.urlencoded({ extended: true }));
app.post("/todos", function (req, res) {
	var newToDo = req.body;
	console.log(newToDo);
	toDos.push(newToDo);
	res.json({"message":"Вы размещаетеся на сервере!"});
});
