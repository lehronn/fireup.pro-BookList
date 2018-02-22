import React from 'react';
import PropTypes from 'prop-types';
import BookForm from './BookForm';
import style from './Book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  removeBookHandler (e) {
    return this.props.removeBook(this.props.id);
  }

  editBookHandler (e) {
    let editedBook = {
      id: this.props.id,
      title: prompt("Enter new title for book."),
      author: prompt("Enter new author for book."),
      year : prompt("Enter new year for book."),
      genere : prompt("Enter new gener for book. Choose between Fantasy, Fiction or Classics.")
    }
    // if (editedBook.genere!== "Fantasy" || "Classics" || "Fiction")
    // {
    //   genere : prompt("Enter new gener for book. Choose between Fantasy, Fiction or Classics.")
    // }
      return this.props.editBook(editedBook);
  }

  render() {
    return (
      <div className={style.bookList}>
        <span>
          <ul>
            <li>Title: {this.props.title} -
              Author: {this.props.author} -
              Year: {this.props.year} -
              Genere: {this.props.genere}
              <button type="submit" className="removeButton" onClick={()=> this.removeBookHandler(this.props.id)}>Delete</button>
              <button type="submit" className="editButton" onClick={()=> this.editBookHandler(this.props.id)}>Edit</button>
            </li>
          </ul>
        </span>
      </div>
    );
  }
}

// Book.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

export default Book;
