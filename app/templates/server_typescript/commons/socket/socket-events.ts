/// <reference path="../../typings/tsd.d.ts" />

"use strict";

export class SocketEvents
{
    static init(io:Object):void
    {
        io.on('connection', function(client:Object)
        {
          client.on('users:online', function()
          {
            io.emit('users:online', 1);
          });
        });
    }
}
