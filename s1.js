document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('bookList');
  
    // Fetch the JSON data
    fetch('Library_Data_EEE.json')
      .then(response => response.json())
      .then(data => {
        // Populate the book gallery using the fetched JSON data
        data.forEach(book => {
          const bookElement = document.createElement('div');
          bookElement.classList.add('book');
  
          const imageElement = document.createElement('img');
          imageElement.src = book['Book Image URL'];
          imageElement.alt = `${book['Book Name']} by ${book['Author Name']}`;
  
          const infoElement = document.createElement('div');
          infoElement.classList.add('book-info');
          infoElement.innerHTML = `<h3>${book['Book Name']}</h3><p>${book['Author Name']}</p><p>Published: ${book['Date of Publishing']}</p><p>Quantity: ${book['No.of Books']}</p>`;
  
          bookElement.appendChild(imageElement);
          bookElement.appendChild(infoElement);
  
          bookList.appendChild(bookElement);
        });
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  