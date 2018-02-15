import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoForm.css';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: '',
      title: '',
      author: '',
      year: '',
      genere: {}
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

  }
    onSubmitHandler(event) {
      event.preventDefault();
      const data = this.state.inputForm;
      // localStorage.setItem(note, this.state.inputForm);
      this.props.add(this.state.inputForm);
    }
    onChange(event) {
      console.log(event.target.value);
      this.setState({inputForm: event.target.value});
      this.setState({title: event.target.value});
      this.setState({author: event.target.value});
      this.setState({year: event.target.value});
      this.setState({genere: event.target.value});
    }

  render() {
    return (
      <div className={style.TodoForm}>
        <span>Add new task to do:</span>
          <form className="TodoForm" onSubmit={this.onSubmitHandler}>
          <p>
            To do:
            <input type="text" value={this.state.inputForm} onChange={(event) => this.onChange(event)}/>
          </p>
          <p>
            Title:
            <input type="text" value={this.state.title} onChange={(event) => this.onChange(event)}/>
          </p>
          <p>
            Author:
            <input type="text" value={this.state.author} onChange={(event) => this.onChange(event)}/>
          </p>
          <p>
            Year:
            <input type="text" value={this.state.year} onChange={(event) => this.onChange(event)}/>
          </p>
          <p>
            Genere: <select value={this.state.value} onChange={(event) => this.onChange(event)}>
              <option value="Si-Fi">Si-Fi</option>
              <option value="Fantasy">Fantasy</option>
              <option selected value="Classics">Classics</option>
              <option value="Poems">Poems</option>
            </select>
          </p>
          <button className="addButton">Add</button>
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
