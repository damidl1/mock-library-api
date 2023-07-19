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

        const coverImage = document.createElement('img');
        coverImage.src = book.cover;
        coverImage.alt = book.title;
        cardDiv.appendChild(coverImage);


        cardDiv.appendChild(createElementWithString('strong', book.title));

        // const authorSpan = cardDiv.appendChild(createElementWithString('span', book.author));
       
        // const dopSpan = cardDiv.appendChild(createElementWithString('span', book.dop.toISOString()));

        // const genreSpan = cardDiv.appendChild(createElementWithString('span', book.genre));
        
        // const coverCard = document.createElement('img');
        // coverCard.src = book.cover;


        const deleteButton = createElementWithString('button', 'Cancella');
        deleteButton.addEventListener('click', () => {
            DbService.deleteBook(book.id).then(() => {
                manager.deleteBook(i);
                render();
            });
        });
        deleteButton.classList.add('delete-btn');
        cardDiv.appendChild(deleteButton);

        const detailButton = createElementWithString('button', 'Dettagli');
        detailButton.addEventListener('click', () => saveAndNavigate(book));
        cardDiv.appendChild(detailButton);

        detailButton.classList.add('detail-btn');

        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("button-wrapper");
        buttonWrapper.appendChild(detailButton);
        buttonWrapper.appendChild(deleteButton);

        cardDiv.appendChild(buttonWrapper);
        
        bookContainer.appendChild(cardDiv);
    }

}





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
      



