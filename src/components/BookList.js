import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from './BookList.css';
import {addBook, removeBook, editBook} from '../actions';
import BookContainer from '../containers/bookContainer';

  const BookList = (props) => {
    return (
      <div>
        <ul>{props.books.lib.map(books => <BookContainer key={books.id} {...books}/>)}</ul>
      </div>
    )
  }
// BookList.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

// export default BookList;
export default BookList;
