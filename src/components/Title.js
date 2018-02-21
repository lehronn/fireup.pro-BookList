import React from 'react';
import uuid from 'uuid';
import style from './Title.css';
import titleContainer from '../containers/titleContainer';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.dir('propsy w title.js');
    console.dir(this.props);
    return (
      <div className={style.bookTitle}>
      <h1>Booknatics.js</h1>
      <p>Books:<span> {this.props.books.books.lib.length}</span></p>
      <p>Classics:<span> {this.props.bookCount}</span></p>
      <p>Fiction:<span> {this.props.bookCount}</span></p>
      <p>Fantasy:<span> {this.props.bookCount}</span></p>
      </div>
    );
  }
}

export default Title;
