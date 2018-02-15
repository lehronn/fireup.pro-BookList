import React from 'react';
import uuid from 'uuid';
import style from './Title.css';

class Title extends React.Component {

  render() {
    return (
      <div className={style.TodoTitle}>
      <h1>Getting Things Done</h1>
      <p>List item to do:
        <span> {this.props.todoCount}</span>
      </p>
      </div>
    );
  }
}

export default Title;
