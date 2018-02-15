import React from 'react';
import PropTypes from 'prop-types';
import style from './BookForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: '',
      title: '',
      author: '',
      year: '',
      genere: ''
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

  }
    onSubmitHandler(event) {
      event.preventDefault();
      const data = this.state;
      // localStorage.setItem(note, this.state.inputForm);
      this.props.add(this.state.inputForm);
      this.props.add(this.state.title);
      this.props.add(this.state.author);
      this.props.add(this.state.year);
      this.props.add(this.state.genere);
    }
    onChange(event) {
      console.log(event.target.value);
      this.setState({inputForm: event.target.value});
      this.setState({title: event.target.title});
      this.setState({author: event.target.author});
      this.setState({year: event.target.year});
      this.setState({genere: event.target.genere});
    }

  render() {
    return (
      <div className={style.TodoForm}>
        <span>Add book here:</span>
          <form className="TodoForm" onSubmit={this.onSubmitHandler}>
          <p>
            <label>To do:</label>
            <input type="text" value={this.state.inputForm} onChange={(event) => this.onChange(event)}/>
          </p>
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
TodoForm.propTypes = {
      add: PropTypes.func.isRequired,
    };

export default TodoForm;
