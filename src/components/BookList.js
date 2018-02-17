import React from 'react';
import PropTypes from 'prop-types';
import style from './BookList.css';
import {addBook, removeBook, editBook} from '../actions'
import Book from '../containers/BookContainer';

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.TodoList}>
        <ul>{this.props.data.map(item => (
          <li key={item.id}>
            <p>Title: {item.title}</p>
            <p>Author: {item.author}</p>
            <p>Year: {item.year}</p>
            <p>Genere: {item.genere}</p>
            <button className="editButton" onClick={()=> editBook(id,title, author, year, genere)}>Edit</button>
            <button className="removeButton" onClick={()=> removeBook(id)}>Delete</button>
          </li>
        ))}</ul>
      </div>
    );
  }
}

BookList.propTypes = {
  remove: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default BookList;
