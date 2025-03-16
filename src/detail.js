import bookService from "./services/book-service.js";

const queryParams = new URLSearchParams(window.location.search);
const idString = queryParams.get('id');
const id = parseInt(idString, 10);

const service = new bookService();

service.getBookFromId(id).then(book => renderBook(book));

function renderBook(bookData) {
    const singleBookContainer = document.getElementById('single-book');
    singleBookContainer.innerHTML = '';
    singleBookContainer.classList.add('bookCont'); // Aggiungi una classe al contenitore

    const id = createTextElement("span", 'id: ' + bookData.id);
    id.classList.add('book-id'); // Aggiungi una classe all'ID

    const title = createTextElement("span", 'Titolo: ' + bookData.title);
    title.classList.add('book-title'); // Aggiungi una classe al titolo

    // Autori
    const authorsContainer = document.createElement('div');
    authorsContainer.classList.add('book-authors'); // Aggiungi una classe agli autori
    for (let i = 0; i < bookData.authors.length; i++) {
        const author = bookData.authors[i];
        const authorDiv = document.createElement('div');
        const authorElement = createTextElement("span", 'Autore: ' + author.name);
        const authorYob = createTextElement("span", 'Nascita: ' + (author.yob || "N/D"));
        const authorYod = createTextElement("span", 'Morte: ' + (author.yod || "N/D"));

        authorDiv.appendChild(authorElement);
        authorDiv.appendChild(authorYob);
        authorDiv.appendChild(authorYod);
        authorsContainer.appendChild(authorDiv);
    }

    // Sommario
    const summaryContainer = document.createElement('div');
    summaryContainer.classList.add('book-summary'); 
    const summary = createTextElement("span", 'Riassunto: ' + bookData.summary);
    summaryContainer.appendChild(summary);

    // Traduttori
    const translators = createTextElement("span", bookData.translators && bookData.translators.length > 0 ? 'Traduttori: ' + bookData.translators.join(', ') : 'Traduttori N/D');
    translators.classList.add('book-translators'); 

    // Soggetto
    const subject = createTextElement("span", bookData.subject && bookData.subject.length > 0 ? 'Soggetto: ' + bookData.subject.join(', ') : 'Soggetto non disponibile');
    subject.classList.add('book-subject'); 

    // Librerie
    const bookshelves = createTextElement("span", bookData.bookshelves && bookData.bookshelves.length > 0 ? 'Librerie: ' + bookData.bookshelves.join(', ') : 'Librerie non disponibili');
    bookshelves.classList.add('book-bookshelves'); // 

    // Lingue
    const languages = createTextElement("span", bookData.languages && bookData.languages.length > 0 ? 'Lingua: ' + bookData.languages.join(', ') : 'Lingue non disponibili');
    languages.classList.add('book-languages'); 
    // Copyright
    const copyright = createTextElement("span", 'Copyright: ' + bookData.copyright);
    copyright.classList.add('book-copyright'); 
    // Formato
    const media_type = createTextElement("span", 'Formato: ' + bookData.media_type);
    media_type.classList.add('book-media-type'); 

    // Immagine di copertina
    const image = document.createElement('img');
    image.src = bookData.coverImage;
    image.classList.add('book-cover'); 

    // Link al formato text/html
    const texthtml = document.createElement("a");
    texthtml.href = bookData.texthtml;
    texthtml.target = "_blank";
    texthtml.textContent = "text/html ";
    texthtml.classList.add('book-link'); 
    // Applicazione Epub+Zip
    const application = document.createElement("a");
    application.href = bookData.application;
    application.target = "_blank";
    application.textContent = "Applicazione Epub+Zip: ";
    application.classList.add('book-link'); 

    // Ebook
    const ebook = document.createElement("a");
    ebook.href = bookData.ebook;
    ebook.target = "_blank";
    ebook.textContent = "application/x-mobipocket-ebook ";
    ebook.classList.add('book-link'); 
    // ASCII
    const ascii = document.createElement("a");
    ascii.href = bookData.ascii;
    ascii.target = "_blank";
    ascii.textContent = "text/plain charset=us-ascii ";
    ascii.classList.add('book-link'); 

    // XML
    const xml = document.createElement("a");
    xml.href = bookData.xml;
    xml.target = "_blank";
    xml.textContent = "application/rdf+xml ";
    xml.classList.add('book-link'); 

    // Stream
    const stream = document.createElement("a");
    stream.href = bookData.stream;
    stream.target = "_blank";
    stream.textContent = "application/octet-stream ";
    stream.classList.add('book-link'); 

    // Download count
    const download_count = createTextElement("span", 'download_count: ' + bookData.download_count);
    download_count.classList.add('book-download-count'); 

    
    singleBookContainer.appendChild(image);
    singleBookContainer.appendChild(id);
    singleBookContainer.appendChild(title);
    singleBookContainer.appendChild(authorsContainer);
    singleBookContainer.appendChild(summaryContainer);
    singleBookContainer.appendChild(translators);
    singleBookContainer.appendChild(subject);
    singleBookContainer.appendChild(bookshelves);
    singleBookContainer.appendChild(languages);
    singleBookContainer.appendChild(copyright);
    singleBookContainer.appendChild(media_type);
    singleBookContainer.appendChild(texthtml);
    singleBookContainer.appendChild(application);
    singleBookContainer.appendChild(ebook);
    singleBookContainer.appendChild(ascii);
    singleBookContainer.appendChild(xml);
    singleBookContainer.appendChild(stream);
    singleBookContainer.appendChild(download_count);
}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}