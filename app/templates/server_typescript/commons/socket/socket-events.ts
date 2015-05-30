"use strict";

export default class SocketEvents
{
    static init(io)
    {
        io.on('connection', function(client)
        {
          client.on('users:online', function()
          {
            io.emit('users:online', 1);
          });
        });
    }
}
