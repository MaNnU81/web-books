import bookService from "./services/book-service.js";

const queryParams = new URLSearchParams(window.location.search);
const idString = queryParams.get('id');
const id = parseInt(idString, 10);



const service = new bookService();

service.getBookFromId(id).then(book => renderBook(book));

function renderBook(bookData) {
    const  singleBookContainer = document.getElementById('single-book')
    singleBookContainer.innerHTML = '';
    const id = createTextElement("span", 'id: ' + bookData.id);
    const title = createTextElement("span", 'Titolo: ' + bookData.title);
    //autori
    const authorsContainer = document.createElement('div');
 for (let i = 0; i < bookData.authors.length; i++) {
    const author = bookData.authors[i];
    const authorDiv = document.createElement('div');
    const authorElement = createTextElement("span", 'Autore: ' + author.name);
    const authorYob = createTextElement("span", 'Nascita: ' + (author.yob || "N/D"));   //.yob e . yod in file author.js (non capisco)
    const authorYod = createTextElement("span", 'Morte: ' + (author.yod || "N/D"));

    authorDiv.appendChild(authorElement);
    authorDiv.appendChild(authorYob);
    authorDiv.appendChild(authorYod);
    authorsContainer.appendChild(authorDiv);
}
  //fine autori // inizio sommario
  const summaryContainer = document.createElement('div');
  const summary = createTextElement("span", 'Riassunto: ' +  bookData.summary);
    summaryContainer.appendChild(summary);
    //fine sommario
    const translators = createTextElement("span", bookData.translators && bookData.translators.length > 0 ? 'Traduttori: ' + bookData.translators.join(', ') : 'Traduttori non disponibili');

    const subject = createTextElement("span", bookData.subject && bookData.subject.length > 0 ? 'Soggetto: ' + bookData.subject.join(', ') : 'Soggetto non disponibile');

    const bookshelves = createTextElement("span", bookData.bookshelves && bookData.bookshelves.length > 0 ? 'Librerie: ' + bookData.bookshelves.join(', ') : 'Librerie non disponibili');

    const languages = createTextElement("span", bookData.languages && bookData.languages.length > 0 ? 'Lingua: ' + bookData.languages.join(', ') : 'Lingue non disponibili');

    const copyright = createTextElement("span", 'Copyright: ' + bookData.copyright);
    const media_type = createTextElement("span", 'Formato: ' + bookData.media_type);

    const image = document.createElement('img');
        image.src = bookData.coverImage;
        // const texthtml = createTextElement("a", 'Text/html; ' + bookData.texthtml)
        const texthtml = document.createElement("a");
        texthtml.href = bookData.texthtml;
        texthtml.target = "_blank";
        texthtml.textContent = "text/html ";
        
        
        const application = document.createElement("a");
        application.href = bookData.application;
        application.target = "_blank";
        application.textContent = "Applicazione Epub+Zip: ";
    
        const ebook = document.createElement("a");
        ebook.href = bookData.ebook;
        ebook.target = "_blank";
        ebook.textContent = "application/x-mobipocket-ebook ";

        const ascii = document.createElement("a");
        ascii.href = bookData.ebook;
        ascii.target = "_blank";
        ascii.textContent = "text/plain charset=us-ascii ";

        const xml = document.createElement("a");
        xml.href = bookData.ebook;
        xml.target = "_blank";
        xml.textContent = "application/rdf+xml ";

        const stream = document.createElement("a");
        stream.href = bookData.ebook;
        stream.target = "_blank";
        stream.textContent = "application/octet-stream ";

        const download_count = createTextElement("span", 'download_count: ' + bookData.download_count);
        
        
        
        


        
    





    

    



   
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