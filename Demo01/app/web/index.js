//To component
//browserify -t [ babelify --presets [ react ] ] index.js -o build/bundle.js

var ReactDOM = require('react-dom');
var React= require('react');

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
