import React from 'react';
import PropTypes from 'prop-types';
import style from './BookList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.TodoList}>
        <ul>{this.props.data.map(item => (
          <li key={item.id}>
            <p>Text: {item.text}</p>
            <p>Title: {item.title}</p>
            <p>Author: {item.author}</p>
            <p>Year: {item.year}</p>
            <p>Genere: {item.genere}</p>
            <button className="editButton" onClick={()=> this.props.remove(item.id)}>Edit</button>
            <button className="removeButton" onClick={()=> this.props.remove(item.id)}>Delete</button>
          </li>
        ))}</ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  remove: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default TodoList;
