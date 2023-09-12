//Backend Socket stuff goes here to send data from server

import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Connect to the server

export default socket;
