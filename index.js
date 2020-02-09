var express = require("express"); // npm으로 설치한 Express module을 불러와서 변수(express)에 담는다
var app = express(); // express 실행 - app object 초기화

app.set("view engine", "ejs"); // ejs 사용하기 위해 express의 view engine에 ejs를 set
app.use(express.static(__dirname + "/public"));

app.get("/hello", function(req, res) { // query를 통해 이름을 받는 코드, 모든 query는 req.query에 저장된다
    res.render("hello", {name: req.query.nameQuery});
})

app.get("/hello/:nameParam", function(req, res) { // route parameter를 통해 이름을 받는 코드, 콜론으로 시작되는 route은 해당 부분에 입력되는 route의 텍스트가 req.params에 저장된다
    res.render("hello", {name: req.params.nameParam});
})

var port = 3000; // 포트 번호
app.listen(port, function() { // 변수(port)를 이용해 3000번 포트에 node.js 서버를 연결
    console.log("Server ON. http://localhost:" + port); // 서버가 실행되면 오른쪽 코드가 콘솔창에 표시된다
});
