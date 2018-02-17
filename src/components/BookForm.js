import React from 'react';
import PropTypes from 'prop-types';
import style from './BookForm.css';
import {addBook, removeBook, editBook} from '../actions';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      year: '',
      genere: ''
    }
  }

  render() {
    return (
      <div className={style.TodoForm}>
        <span>Add book here:</span>
          <form className="TodoForm" onSubmit={this.onSubmitHandler}>
          <p>
            <label>Title:</label>
            <input type="text" value={this.state.title} onChange={(event) => this.onChange(event)}/>
          </p>
          <p>
            <label>Author:</label>
            <input type="text" value={this.state.author} onChange={(event) => this.onChange(event)}/>
          </p>
          <p>
            <label>Year:</label>
            <input type="text" value={this.state.year} onChange={(event) => this.onChange(event)}/>
          </p>
          <p>
            <label>Genere:</label>
            <select value={this.state.genere} onChange={(event) => this.onChange(event)}>
              <option value="Si-Fi">Si-Fi</option>
              <option value="Fantasy">Fantasy</option>
              <option selected value="Classics">Classics</option>
              <option value="Poems">Poems</option>
            </select>
          </p>
          <button className="addButton" onClick={()=> addBook(title, author, year, genere)}>Add</button>
        </form>
      </div>
    );
  }
}
    //walidacja proptypes i props default
BookForm.propTypes = {
      add: PropTypes.func.isRequired,
    };

export default BookForm;
