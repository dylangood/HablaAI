import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import TodoList from './components/TodoList.jsx';

import dummies from '../../db/dummy_data.js';

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
        <Search />
        <TodoList todos={dummies} />
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById('app-container') );
