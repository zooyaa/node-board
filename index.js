var express = require("express"); // npm으로 설치한 Express module을 불러와서 변수(express)에 담는다
var app = express(); // express 실행 - app object 초기화

app.get('/', function(req, res) { // '/' 경로에 'get' 방식의 요청을 받을 때,
    res.send("hi"); // 왼쪽 코드("hi")를 보낸다
});

var port = 3000; // 포트 번호
app.listen(port, function() { // 변수(port)를 이용해 3000번 포트에 node.js 서버를 연결
    console.log("Server ON. http://localhost:" + port); // 서버가 실행되면 오른쪽 코드가 콘솔창에 표시된다
});
