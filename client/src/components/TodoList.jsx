import React from 'react';
import TodoListItem from './TodoListItem.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var list = this.props.todos.map(item => {
      return <TodoListItem key={item.id} todo={item.todo} />;
    });

    return (
      <div>
        <h3>To-Do List</h3>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default TodoList;
