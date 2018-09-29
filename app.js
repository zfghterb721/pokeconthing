const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
// our localhost port
const port = 80

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later

app.use(express.static('public'))

app.get('/:pokemon', (req, res) => {
	io.emit('pokemon', req.params.pokemon);
    res.send('<img src="sprites/'+req.params.pokemon+'.png" height="1000">');
});

server.listen(port, () => console.log(`Listening on port ${port}`))