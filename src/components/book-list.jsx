import React from 'react'
import moment from 'moment'

const BookList = ({books, deleteBook}) => {
  return (
    <ul className='BookList list-group col-sm-6'>
      {
        books.map(book => {
          return (
            <li key={book.id} className='list-group-item'>
              <div 
                className='list-item delete-button'
                onClick={() => deleteBook(book.id)}>&#x2715;
              </div>
              <div className='list-group'>
                <div className='list-item'>Title: {book.title}</div>
                <div className='list-item'>Author: {book.author}</div>
                <div className='list-item'>Page: {book.page}</div>
                <div className='list-item'>Created: {moment(new Date(book.date)).format('YYYY-MM-DD')}</div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default BookList;