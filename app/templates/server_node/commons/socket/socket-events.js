"use strict";

module.exports = class SocketEvents {
    static init(io) {
        io.on('connection', (client) => {
          client.on('users:online', () => {
            io.emit('users:online', 1);
          });
        });
    }
}
