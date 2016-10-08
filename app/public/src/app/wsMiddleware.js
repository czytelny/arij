import socketIO from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';

const HOST = "http://localhost";
const PORT = "3030";
const socket = socketIO.connect(`${HOST}:${PORT}`);

export default createSocketIoMiddleware(socket, "server/");
