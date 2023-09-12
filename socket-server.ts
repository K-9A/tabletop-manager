import { createServer } from 'http';
import { Server as SocketIoServer, Socket } from 'socket.io';

const server = createServer();

const io = new SocketIoServer(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

io.on('connection', (socket: Socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    // Listen for chat messages and broadcast them to all clients
    socket.on('chat message', (msg: string) => { // Assuming the message is a string. Adjust the type if needed.
        console.log("Server received message:", msg);
        io.emit('chat message', msg);
    });
});

server.listen(4000, (err?: Error) => {
    if (err) throw err;
    console.log('> Socket.io server ready on http://localhost:4000');
});
