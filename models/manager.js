class Manager{

    constructor(booksArray = []){
        
        this.booksArray = booksArray;
    }


    addBook(book){
        
        this.booksArray.push(book);
    }

    deleteBook(index){
        
        this.booksArray.splice(index, 1);
    }

    orderByTitle(){

        this.booksArray.sort((book1, book2) => book1.title.localeCompare(book2.title));
    }

    orderByDop(){

        this.booksArray.sort((book1, book2) => book1.dop.getTime() - book2.dop.getTime());
    }
}

