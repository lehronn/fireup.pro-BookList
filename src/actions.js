import uuid from 'uuid'; // import unical id generator

//actions objects
export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

//actions creators
export const addBook = (addedBook) => ({
  type: 'ADD_BOOK',
  id: uuid.v4(),
  title: addedBook.title,
  author: addedBook.author,
  year: addedBook.year,
  genere : addedBook.genere
});

export const editBook = (editedBook) => ({
  type: 'EDIT_BOOK',
  id: editedBook.id,
  title: editedBook.title,
  author: editedBook.author,
  year: editedBook.year,
  genere : editedBook.genere
});

export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id
});
