const util = require('../testUtil/<%=utilPath%>');
const chai = require('chai');

const expect = chai.expect;
const <%=modName%> = util.<%=modName%>;

describe('<%=modName%>', function () {
<%=testHelper%>

<%=data%>
});
