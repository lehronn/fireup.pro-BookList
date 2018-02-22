import React from 'react';
import uuid from 'uuid';
import style from './Title.css';
import titleContainer from '../containers/titleContainer';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // counters
    var fantasyCounter = this.props.books.books.lib.filter(function(obj){return obj.genere=='Fantasy'}).length;

    var fictionCounter = this.props.books.books.lib.filter(function(obj){return obj.genere=='Fiction'}).length;

    var classicsCounter = this.props.books.books.lib.filter(function(obj){return obj.genere=='Classics'}).length;

    return (
      <div className={style.bookTitle}>
        <h1>Booknatics.js</h1>
          <p>
            Books: {this.props.books.books.lib.length},
          </p>
          <p>
            Fantasy: {fantasyCounter},
            Fiction: {fictionCounter},
            Classics: {classicsCounter}
          </p>
      </div>
    );
  }
}

export default Title;
