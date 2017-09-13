import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input onChange={this.props.handleChange} ></input>
        <button onClick={this.props.handleClick} >Search To-Do's</button>
      </div>
    );
  }
}

export default Search;
