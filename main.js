let manager;

DbService.getAllBooks()
         .then(books => {
            manager = new Manager(books);
            render(manager.booksArray);
         });


function render() {
    
    const bookContainer = document.getElementById('main-container');
    bookContainer.innerHTML = '';

    for (let i = 0; i < manager.booksArray.length; i++) {
        
        const book = manager.booksArray[i];

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('book-card');


        cardDiv.appendChild(createElementWithString('strong', book.title));

        const authorSpan = cardDiv.appendChild(createElementWithString('span', book.author));
       
        const dopSpan = cardDiv.appendChild(createElementWithString('span', book.dop.toISOString()));

        const genreSpan = cardDiv.appendChild(createElementWithString('span', book.genre));
        
        const coverCard = document.createElement('img');
        coverCard.src = book.cover;


        const deleteButton = createElementWithString('button', 'Cancella');
        deleteButton.addEventListener('click', () => {
            DbService.deleteBook(book.id).then(() => {
                manager.deleteBook(i);
                render();
            });
        });
        cardDiv.appendChild(deleteButton);

        const detailButton = createElementWithString('button', 'Dettagli');
        detailButton.addEventListener('click', () => saveAndNavigate(book));
        cardDiv.appendChild(detailButton);
        
        bookContainer.appendChild(cardDiv);
    }

}

render()



function saveAndNavigate(book) {     
    
       window.location = './detail.html?id=' + book.id;  
    }



    function orderByTitle() {
        manager.orderByTitle();
        render();
      }
      
      function orderByDop() {
        manager.orderByDop();
        render();
      }
      



