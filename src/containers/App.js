import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import style from './App.css';
import Title from './titleContainer';
import BookFormContainer from './bookFormContainer';
import BookListContainer from './bookListContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.bookApp}>
        <Title className={style.bookTitle}/>
        <BookFormContainer className={style.bookForm}/>
        <BookListContainer className={style.bookList}/>
      </div>
    );
  }
}

export default App;
