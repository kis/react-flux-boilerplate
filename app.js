var React = require('react'),
	TodoBox = require('./views/TodoBox.jsx');

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json')); 
React.render(<TodoBox data={data} />, document.getElementById("app"));