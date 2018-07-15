import { ADD_BOOK, DELETE_BOOK } from '../constants';

export const addBook = (text) => {
  const action = {
    type: ADD_BOOK,
    text
  }

  return action;
}

export const deleteBook = (id) => {
  const action = {
    type: DELETE_BOOK,
    id
  }

  return action;
}