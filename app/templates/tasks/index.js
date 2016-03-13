require('./default');

require('require-dir')('client');
<% if (nodeServer) {%>
require('require-dir')('server');
<% } %>
