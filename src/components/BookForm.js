import React from 'react';
import PropTypes from 'prop-types';
import style from './BookForm.css';
import {addBook, removeBook, editBook} from '../actions';
import bookFormContainer from '../containers/bookFormContainer';

let addedBook = {};

class BookForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmitHandler (e) {
    e.preventDefault();
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
        console.log('addedBook:');
        console.dir(addedBook);
        console.log('propsy w on submithandler w bookform:');
        console.dir(this.props);
        console.log(this.props);
        return this.props.addBook(addedBook);
      }
}

  render() {
    console.log('Propsy w renderze bookform:');
    console.dir(this.props);
    console.log(this.props);
    return (
      <div className={style.bookForm}>
        <span>Add book here:</span>
          <form className={style.bookForm} onSubmit={(e) => this.onSubmitHandler(e)}>
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
