/**
 * @returns {Object} Quote Information
 */
const fetchQuote = async () => {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    // console.log(response);
    const data = await response.json();
    //element.innerHTML = data[0].quote;
    //element.style.color = data[0].color;
    
    console.log(data[0]);
    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element ) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading....';

    //await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';
    
    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );

    }

    //Añadir Listener
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading....';
        const quote = await fetchQuote();
        renderQuote( quote );
    }) 

   fetchQuote()
        .then( renderQuote );
   
}