import { ADD_BOOK, DELETE_BOOK } from '../constants'

const book = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const removeById = (state = [], id) => {
  const books = state.filter(book => book.id != id)
  return books
}


const books = (state = [], action) => {
  switch(action.type) {
    case ADD_BOOK:
      return [...state, book(action)]
    case DELETE_BOOK:
      return removeById(state, action.id);
    default:
      return state
  }

}

export default books;