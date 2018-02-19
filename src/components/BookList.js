import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from './BookList.css';
import {addBook, removeBook, editBook} from '../actions';
import Book from './Book';

let title, author, year, genere;

  const BookList = (props) => {
    console.log('propsy w komponencie booklist:');
    console.dir(props);
    console.log(props);
    return (
      <ul>{props.books.books.map(books => <Book key={books.id} {...books}/>)}</ul>
    )
  }
// BookList.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

// export default BookList;
export default (BookList);
