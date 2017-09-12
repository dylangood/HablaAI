import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {}
    };
  }

  render() {
    return (
      <div>
        <h2>Hello cruel world!</h2>
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById('app-container') );
