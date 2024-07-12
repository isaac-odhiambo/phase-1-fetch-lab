function fetchBooks() {
  const apiUrl = 'https://anapioficeandfire.com/api/books';

  return fetch(apiUrl) // Ensure this returns the fetch promise
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.json();
      })
      .then(data => {
          renderBooks(data); // Pass the JSON data to renderBooks
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
}

// Function to render book titles in the DOM
function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = ''; // Clear any existing content

  books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.textContent = book.name; // Render only the book title
      bookList.appendChild(bookItem);
  });
}

// Call fetchBooks when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchBooks);
