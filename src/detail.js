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
    





    

    



   
    
    singleBookContainer.appendChild(id);
    singleBookContainer.appendChild(title);
    singleBookContainer.appendChild(authorsContainer);
    singleBookContainer.appendChild(summaryContainer);
    
    
}



function createTextElement(elementType, text) {

    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}