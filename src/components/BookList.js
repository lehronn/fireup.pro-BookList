import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from './BookList.css';
import {addBook, removeBook, editBook} from '../actions'
import Book from '../containers/bookContainer';

// const mapStateToProps = (state) => {
//   return { books: state.items }; //czy dobrze opisany obiekt state?
// };

let title, author, year, genere;

const BookList = (props) => {
  return (
    <div className={style.bookList}>
      <ul>
        <li>{title}-{author}-{year}-{genere}</li>)
        </ul>
      </div>
  )
}

// BookList.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

// export default BookList;
export default (BookList);
