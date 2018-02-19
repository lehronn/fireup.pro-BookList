import React from 'react';
import PropTypes from 'prop-types';
import style from './BookForm.css';
import {addBook, removeBook, editBook} from '../actions';

let addedBook = {};

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      year: '',
      genere: '',
    }
  }

  onSubmitHandler (e) {
    e.preventDefault();
    console.dir(e.target);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);

    if (
      e.target[0].value == '' ||
      e.target[1].value == '' ||
      e.target[2].value == '')
      {
        alert('All informations, please.');
        return false;
      }
      else {
        let addedBook = {
          title: e.target[0].value,
          author: e.target[1].value,
          year: e.target[2].value,
          genere: e.target[3].value
        };
        return addBook(addedBook);
      }
}

  render() {
    return (
      <div className={style.bookForm}>
        <span>Add book here:</span>
          <form className={style.bookForm} onSubmit={this.onSubmitHandler}>
          <p>
            <label>Title:
              <input type="text" name="title" ref={node => (this.inputNode = node)}/>
            </label>
          </p>
          <p>
            <label>Author:
              <input type="text" name="author" ref={node => (this.inputNode = node)}/>
            </label>
          </p>
          <p>
            <label>Year:
              <input type="text" name="year" ref={node => (this.inputNode = node)}/>
            </label>
          </p>
          <p>
            <label>Genere:</label>
              <select name="genere" ref={node => (this.inputNode = node)}>
                <option value="Fantasy">Fantasy</option>
                <option value="Fiction">Fiction</option>
                <option value="Classics">Classics</option>
              </select>
          </p>
          <button type="submit" className="addButton">Add</button>
        </form>
      </div>
    );
  }
}

// BookForm.propTypes = {
//       add: PropTypes.func.isRequired,
//     };

export default BookForm;
