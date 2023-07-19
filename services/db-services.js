class DbService{


    static getAllBooks(){


        const url = 'https://64b78c2521b9aa6eb0784ad1.mockapi.io/books';

        return fetch(url)
        .then(resp => resp.json())
        .then(result => this.convertToBooksArray(result))
        .catch(error => console.log(error.message));

    }

    static getSingleBook(id){

        const url = 'https://64b78c2521b9aa6eb0784ad1.mockapi.io/books/' + id;
        return fetch(url)
        .then(resp => resp.json());
    }
    
    
    
    
    static deleteBook(id){

        const deleteUrl = 'https://64b78c2521b9aa6eb0784ad1.mockapi.io/books/' + id;
        return fetch(deleteUrl, {method: 'delete'})
               .then(resp => resp.json());
    }


    


    static convertToBooksArray(genericArray){

        const tempArray = [];

        for (const obj of genericArray) {
            
            const newBook = new Book(obj.title, obj.author, new Date(obj.dop), obj.genre, obj.cover, obj.id);
            tempArray.push(newBook);
        }
        
        return tempArray;
    }

}

