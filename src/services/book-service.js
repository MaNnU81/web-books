import Book from "../model/book.js";
import Author from "../model/author.js";

export default class bookService {

    constructor() {}

    getBookData() {

        const DEV_BOOKS_URL = "/assets/books.json";
        const PROD_BOOKS_URL = "assets/books.json";

        const booksDataPromise = fetch(DEV_BOOKS_URL)
        .then(resp => resp.json())
        .then(data => {
            const books = this.createBooksFromData(data);
            console.log(books);
            return books;
        })
        .catch(err => console.log(err));
        return booksDataPromise;
    }

    getBooksByTitle() {
        
    }

    getAuthorsName(authorsData) {
        const authorsList = [];
        for (let i = 0; i < authorsData.length; i++) {
            const authorData = authorsData[i];

            const authorName = authorData.name;
            const yob = authorData.birth_year;
            const yod = authorData.death_year;

            const newAuthor = new Author(authorName, yob, yod);
            authorsList.push(newAuthor);            
        }
        return authorsList;
    
    }

    getBookFromId(id) {
        return this.getBookData()
        .then(books => {
            const book = books.find(book => book.id === id)
            return book;
        })
        .catch(err => console.log(err));
    }

    createBooksFromData(data) {
        const books = [];
        for (let i = 0; i < data.length; i++) {
            const bookData = data[i];

            const id = bookData.id;
            const title = bookData.title;
            const authors = this.getAuthorsName(bookData.authors);
            const summaries = bookData.summaries[0];
            const translators = bookData.translators;
            const subjects = bookData.subjects;
            const bookshelves = bookData.bookshelves;
            const languages = bookData.languages;
            const copyright = bookData.copyright;
            const media_type = bookData.media_type;
            const texthtml = bookData.formats["text/html"]
            const coverImg = bookData.formats["image/jpeg"];
            const application = bookData.formats["application/epub+zip"];
            const ebook = bookData.formats["application/x-mobipocket-ebook"];
            const ascii = bookData.formats["text/plain; charset=us-ascii"];
            const xml = bookData.formats["application/rdf+xml"];
            const stream = bookData.formats["application/octet-stream"];
            const download_count = bookData.download_count;

            const newBook = new Book(id, title, authors, summaries,translators, subjects, bookshelves, languages, copyright, media_type, texthtml, coverImg, application, ebook, ascii, xml, stream, download_count);
            books.push(newBook);
        }
        return books;
    }
}
