import React from 'react';
import PropTypes from 'prop-types';
import BookForm from './BookForm';
import style from './Book.css';

class Book extends React.Component {
  constructor(props, id, author, title, genere, year) {
    super(props);
  }

  render() {
    console.log('propsy w komponencie book:');
    console.dir(this.props);
    console.log(this.props);
    return (
      <div className={style.bookList}>
        {this.props.map(item => (
          <span>
            {item.title}
            <button className="removeButton" onClick={()=> this.props.remove(item.id)}>Delete</button>
          </span>
        ))}
      </div>
    );
  }
}

// Book.propTypes = {
//   remove: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired
// };

export default Book;
