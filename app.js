const express = require('express')
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)

var path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render('index');
})

http.listen(3000, () => {
    console.log('listening on : 3000!');
})

io.on('connection', (socket) => {
    socket.on('send message', function(msg){
        console.log('recv Message', msg)

        socket.emit('new message', msg)
    })
}) 

