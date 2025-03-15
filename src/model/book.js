import Author from './author.js';

export default class Book {
    constructor(id, title, authors = [] ,summary, translators = [], subject = [], bookshelves = [], languages = [], copyright, media_type, texthtml, coverImage, application, ebook, ascii, xml, stream, download_count) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.summary = summary;
        this.translators = translators;
        this.subject = subject;
        this.bookshelves = bookshelves;
        this.languages = languages;
        this.copyright = copyright;
        this.media_type = media_type;
        this.texthtml = texthtml;
        this.coverImage = coverImage;
        this.application = application;
        this.ebook = ebook;
        this.ascii = ascii;
        this.xml = xml;
        this.Stream = stream;
        this.download_count = download_count;
    }
}


// const author1 = new Author('pippo', 1950, 2000)
// const author2 = new Author('pluto', 1951, null)
// const authors = [author1, author2]
// const subject = ['giallo', 'epica']
// const book1 = new Book(26262, 'iliade', authors, 'ciao', subject, 'http://google.com/img1.jgp');
// console.log(book1);

