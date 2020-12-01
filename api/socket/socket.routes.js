module.exports = connectSockets;

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('on newBoard', board => {
            io.to(socket.myBoard).emit('update board', board);
        });
        socket.on('join board', id => {
            if (socket.myBoard) {
                socket.leave(socket.myBoard);
            }
            socket.join(id);
            socket.myBoard = id;
        });
    });
}