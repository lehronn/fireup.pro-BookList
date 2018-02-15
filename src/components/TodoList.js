import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.TodoList}>
        <ul>{this.props.data.map(item => (
          <li key={item.id}>
            {item.text}
            <button className="removeButton" onClick={()=> this.props.remove(item.id)}>Delete</button>
          </li>
        ))}</ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  remove: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default TodoList;
