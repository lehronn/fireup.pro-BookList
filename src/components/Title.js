import React from 'react';
import uuid from 'uuid';
import style from './Title.css';

class Title extends React.Component {

  render() {
    return (
      <div className={style.bookTitle}>
      <h1>Booknatics.js</h1>
      <p>Books:<span> {this.props.book}</span></p>
      <p>Classics:<span> {this.props.bookCount}</span></p>
      <p>Fiction:<span> {this.props.bookCount}</span></p>
      <p>Fantasy:<span> {this.props.bookCount}</span></p>
      </div>
    );
  }
}

export default Title;
