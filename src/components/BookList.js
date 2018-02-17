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
        
      </div>
    );
  }
}

// BookList.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

export default BookList;
