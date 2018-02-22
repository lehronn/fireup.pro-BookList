import { ADD_BOOK, EDIT_BOOK, REMOVE_BOOK } from '../actions.js';

let initialState = {lib: []};

function Books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, {
                lib: [
                {
                  id: action.id,
                  title: action.title,
                  author: action.author,
                  year: action.year,
                  genere: action.genere
                }
                , ...state.lib]
            })
    case REMOVE_BOOK:
      return Object.assign({}, state, {
                lib: state.lib.filter(book => book.id !== action.id)
            });
    // case EDIT_BOOK:
    //     return book;
    //   });

    default:
      return state;
  }
};

export default Books;
