import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import TodoList from './components/TodoList.jsx';

const searchEndpoint = 'http://127.0.0.1:7060/api/todos/search?name=';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      todos: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    axios.get(searchEndpoint + this.state.search)
    .then( list => {
      this.setState({todos: list.data.todos});
    })
    .catch( error => {
      console.log('Error GETting Todos:', error);
    });
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleClick} handleChange={this.handleChange} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById('app-container') );
