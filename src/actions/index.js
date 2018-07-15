import { ADD_BOOK, DELETE_BOOK, CLEAR_BOOKS } from '../constants';
import moment from 'moment';

export const addBook = (title, author, page) => {
  let date = moment().valueOf()
  const action = {
    type: ADD_BOOK,
    title,
    author,
    page,
    date
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

export const clearBooks = () => {
  const action = {
    type: CLEAR_BOOKS
  }

  return action;
}