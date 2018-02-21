import { ADD_BOOK, EDIT_BOOK, REMOVE_BOOK } from '../actions.js';

function Books(state = {}, action) {
  switch (action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, {
                books: [
                {
                  id: action.id,
                  title: action.title,
                  author: action.author,
                  year: action.year,
                  genere: action.genere
                }
                , ...state]
            })
    // case REMOVE_BOOK:
    //   return Object.assign({}, state, {
    //             books: state.books.filter(book => book.id !== action.id)
    //         });
    // case EDIT_BOOK:
    //     return book;
    //   });

    default:
      return state;
  }
};

export default Books;
