"use strict";

var _init = function(io)
{
  io.on('connection', function(client)
  {
    client.on('users:online', function()
    {
        io.emit('users:online', 1);
    });
  });
}

exports.init = _init;

