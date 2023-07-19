

const queryParams = new URLSearchParams(window.location.search);

const id = queryParams.get('id');

if(id){

    DbService.getSingleBook(id).then(book => render(book));


}


function render(book) {
    
    const bookContainer = document.getElementById('book-container');

    bookContainer.appendChild(createElementWithString('span', book.title));
    bookContainer.appendChild(createElementWithString('span', book.author));
    bookContainer.appendChild(createElementWithString('span', book.dop));
    bookContainer.appendChild(createElementWithString('span', book.genre));
    bookContainer.appendChild(createElementWithString('img', book.cover));

    


   
}