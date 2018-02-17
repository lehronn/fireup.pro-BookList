import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title className={style.TodoTitle}/>
        <BookForm className={style.TodoForm}/>
        <BookList className={style.TodoList}/>
      </div>
    );
  }
}

export default App;
