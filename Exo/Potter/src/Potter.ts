export class Potter{


    private _book_price = 8;

        //Deux 0,05
        //Trois 0,10
        //Quatre 0,20
        // cinq 0,25

    price(books: number[]): number{
        let price = 0;
        const uniqueBook = new Set(books)
        if(books.length > 0){
            if(uniqueBook.size == 2 && books.length == 4){
                price += 30.4
            }
            else if(uniqueBook.size == 2 && books.length == 3){
                price += 23.2
            }
            else if(uniqueBook.size == 2 ){
                price += this._book_price * books.length - (this._book_price * books.length * 0.05)
            }

            else if(uniqueBook.size == 3 ){
                price += this._book_price * books.length - (this._book_price * books.length * 0.1)
            }

            else if(uniqueBook.size == 4 ){
                price += this._book_price * books.length - (this._book_price * books.length * 0.20)
            }

            else if(uniqueBook.size == 5 ){
                price += this._book_price * books.length - (this._book_price * books.length * 0.25)
            }
            else {
                price += this._book_price * books.length
            }
        }

        return price;
    }





}