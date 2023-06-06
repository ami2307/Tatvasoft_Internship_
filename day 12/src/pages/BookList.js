import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  // Fetch initial list of books (can be replaced with API call)
  useEffect(() => {
    // Fetch books from API or use mock data
    const initialBooks = [
        { id: 1, title: 'The 3 mistake of my life', author: 'Chetan Bhagat', image: 'https://www.bookspace.in/cdn/shop/products/51nziLHeduL._SX328_BO1_204_203_200.jpg?v=1680023237&width=823' },
        { id: 2, title: '2 States', author: 'Chetan Bhagat', image: 'https://cdn.shopify.com/s/files/1/0607/9859/9427/products/2_States_1_1.jpg?v=1669451270&width=493' },
        { id: 3, title: 'You still love me?', author: 'Author 3', image: 'https://www.bookgeeks.in/wp-content/uploads/2020/05/Will-You-Still-Love-Me-Ravinder-Singh.jpg' },
        { id: 4, title: 'Revolution 2020', author: 'Chetan Bhagat', image: 'https://www.bookgeeks.in/wp-content/uploads/2020/05/Sorry-You%E2%80%99re-Not-My-Type-%E2%80%93-Sudeep-Nagarkar.jpg' },
        { id: 5, title: 'Ham Aapke he kon', author: 'Sallu Bhai', image: 'https://booksandyous3.s3.ap-south-1.amazonaws.com/chetan%20bhagat%20Revolution%202020%20(1).jpg' },
        { id: 6, title: 'Kal Aana', author: 'Kalakunj', image: 'https://cdn.shopify.com/s/files/1/0607/9859/9427/products/WhatsAppImage2022-09-23at4.57.54PM_1.jpg?v=1663936265&width=493' },
        { id: 7, title: 'Bageswar Baba Ki Jay !!', author: 'DK', image: 'https://www.barnesandnoble.com/blog/wp-content/uploads/2015/07/WhatIThoughtWasTrue-1.jpg' }
    ];
    setBooks(initialBooks);
  }, []);

  const addBook = (book) => {
    // Generate a unique ID for the new book
    const newBook = { ...book, id: Date.now() };
    setBooks([...books, newBook]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    setEditingBook(null);
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const openEditForm = (book) => {
    setEditingBook(book);
  };

  return (
    <div>
      <h1>Book List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <button onClick={() => openEditForm(book)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BookForm addBook={addBook} updateBook={updateBook} editingBook={editingBook} />
    </div>
  );
};

export default BookList;
