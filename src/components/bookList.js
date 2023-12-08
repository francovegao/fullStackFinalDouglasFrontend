import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BookCard from './bookCard';

export default function BookList() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
        .get('https://fullstack-finalexam-backend.onrender.com/')
        .then((res) => {
          console.log(res)
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        });
    }, []);

    console.log(books)

    const deleteBook = (id) => {
      axios
        .delete('https://fullstack-finalexam-backend.onrender.com/' + id)
        .then((response) => {
          console.log(response.data);
        });
  
      setBooks(books.filter((el) => el._id !== id));
    };
  
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard book={book} key={book._id} deleteBook={deleteBook} />);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books in the List</h2>
              
              <h3 className="btn btn-warning btn-lg">{bookList.length}</h3>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-info float-right'
              >
                <a>+ Add New Book</a>
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }