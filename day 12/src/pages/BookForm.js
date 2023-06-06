import React, { useState } from 'react';

const BookForm = ({ addBook, updateBook }) => {
  const [book, setBook] = useState({ id: '', title: '', author: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (book.id) {
      // Existing book, update
      updateBook(book);
    } else {
      // New book, add
      addBook(book);
    }

    // Clear the form
    setBook({ id: '', title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{book.id ? 'Edit Book' : 'Add Book'}</h2>
      <label>
        Title:
        <input type="text" name="title" value={book.title} onChange={handleInputChange} />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={book.author} onChange={handleInputChange} />
      </label>
      <button type="submit">{book.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default BookForm;
