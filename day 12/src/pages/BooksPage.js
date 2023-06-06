import React, { useState } from 'react';

const booksData = [
  { id: 1, title: 'The 3 mistake of my life', author: 'Chetan Bhagat', image: 'https://www.bookspace.in/cdn/shop/products/51nziLHeduL._SX328_BO1_204_203_200.jpg?v=1680023237&width=823' },
  { id: 2, title: '2 States', author: 'Chetan Bhagat', image: 'https://cdn.shopify.com/s/files/1/0607/9859/9427/products/2_States_1_1.jpg?v=1669451270&width=493' },
  { id: 3, title: 'You still love me?', author: 'Author 3', image: 'https://www.bookgeeks.in/wp-content/uploads/2020/05/Will-You-Still-Love-Me-Ravinder-Singh.jpg' },
  { id: 4, title: 'Book 4', author: 'Author 4', image: 'https://www.bookgeeks.in/wp-content/uploads/2020/05/Sorry-You%E2%80%99re-Not-My-Type-%E2%80%93-Sudeep-Nagarkar.jpg' },
  { id: 5, title: 'Book 5', author: 'Author 5', image: 'https://booksandyous3.s3.ap-south-1.amazonaws.com/chetan%20bhagat%20Revolution%202020%20(1).jpg' },
  { id: 6, title: 'Book 6', author: 'Author 6', image: 'https://cdn.shopify.com/s/files/1/0607/9859/9427/products/WhatsAppImage2022-09-23at4.57.54PM_1.jpg?v=1663936265&width=493' },
  { id: 7, title: 'Book 7', author: 'Author 7', image: 'https://www.barnesandnoble.com/blog/wp-content/uploads/2015/07/WhatIThoughtWasTrue-1.jpg' },
  // Add more books to the array if needed
];

function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(2);

  // Filter books based on search query
  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort books based on sort order
  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'desc') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  // Pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Book Listing Page</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Sort */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </select>

      {/* Book list */}
      <ul>
        {currentBooks.map((book) => (
          <li key={book.id}>
            <img src={book.image} alt={book.title} style={{ width: '100px' }} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div>
        {Array.from({ length: Math.ceil(sortedBooks.length / booksPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}


export default BooksPage;
