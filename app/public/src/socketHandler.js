import socketIO from 'socket.io-client';

const HOST = "http://localhost";
const PORT = "3030";

export default socketIO.connect(`${HOST}:${PORT}`);
