require('./default');

require('require-dir')('client');
<% if (!clientOnly) {%>
require('require-dir')('server');
<% } %>
