/// <reference path="../../typings/tsd.d.ts" />

export class SocketEvents {
    static init(io:Object):void {
        io.on('connection', (client:Object) => {
          client.on('users:online', () => {
            io.emit('users:online', 1);
          });
        });
    }
}
