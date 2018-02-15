import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoForm.css';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: '',
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

  }
    onSubmitHandler(event) {
      event.preventDefault();
      const data = this.state.inputForm;
      localStorage.setItem(note, this.state.inputForm);
      this.props.add(this.state.inputForm);
    }
    onChange(event) {
      console.log(event.target.value);
      this.setState({inputForm: event.target.value});
    }

  render() {
    return (
      <div className={style.TodoForm}>
        <span>Add new task to do:</span>
          <form className="TodoForm" onSubmit={this.onSubmitHandler}>
          <input type="text" value={this.state.inputForm} onChange={(event) => this.onChange(event)}/>
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
