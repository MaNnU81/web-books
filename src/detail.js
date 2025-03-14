import bookService from "./services/book-service.js";

const queryParams = new URLSearchParams(window.location.search);
const idString = queryParams.get('id');
const id = parseInt(idString, 10);

console.log(id);

const service = new bookService();
console.log('pippo', service);
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
    const authorYob = createTextElement("span", 'Nascita: ' + (author.yob || "N/D"));
    const authorYod = createTextElement("span", 'Morte: ' + (author.yod || "N/D"));

    authorDiv.appendChild(authorElement);
    authorDiv.appendChild(authorYob);
    authorDiv.appendChild(authorYod);

    
    authorsContainer.appendChild(authorDiv);
}
  


    //fine autori // inizio sommario
    // const summaryContainer = document.createElement('div');
    // const summaryData = createTextElement("span", 'Riepilogo: ');
    // summaryContainer.appendChild(summaryData);
    // for (let i = 0; i < bookData.summaries.length; i++) {
    //     const summary = bookData.summaries[i];
    //     const summariesElement = createTextElement("span", summary)
    //     summaryContainer.appendChild(summariesElement);
        
    // }



    

    



    // singleBookContainer.appendChild(summary);
    singleBookContainer.appendChild(id);
    singleBookContainer.appendChild(title);
    singleBookContainer.appendChild(authorsContainer);
    // singleBookContainer.appendChild(summaryContainer);
    
}



function createTextElement(elementType, text) {

    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}