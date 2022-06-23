document.addEventListener("DOMContentLoaded", function(){

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => console.log(data))

    fetch('https://type.fit/api/quotes')// this Quotes API works
    .then( res => res.json())
    .then( quotesData => usingQuotesData(quotesData))

    // Functions for the Quotes
    function usingQuotesData(quotesArrays){
        const oneHundredquotes= (quotesArrays.slice(0,99))
        const onlytheTextfromtheQuotes = oneHundredquotes.map(oneHundredquotes =>{
            return oneHundredquotes.text
        })
        /* Failed ForEach attempt
        console.log(onlytheTextfromtheQuotes) this works(this is still an array)
        console.log(quotes) returns quotes object to 100
        const randomquoteGeneratorlocation = document.querySelector('#quote-area')

        oneHundredquotes.forEach( function (eachquoteObject){
            const newlyGeneratedQuoteSpot = document.querySelector('#quote')
            const newlyGeneratedQuote = document.createElement('h3')
            const buttontoGenerateNewRandomQuote = document.querySelector('#quote-button')
            buttontoGenerateNewRandomQuote.addEventListener('click', function (items){
                let result =  items[Math.floor(Math.random()*items.length)]

                newlyGeneratedQuote.textContent = result

                newlyGeneratedQuoteSpot.append(newlyGeneratedQuote)
            })
            
            
        })
        */


        const newlyGeneratedQuoteDiv = document.querySelector('#quote')
        const buttontoGenerateNewRandomQuote = document.querySelector('#quote-button')
        buttontoGenerateNewRandomQuote.addEventListener('click', function(){
            const newQuote = document.createElement('h4')
            newlyGeneratedQuoteDiv.innerHTML = ''
            newQuote.textContent = `" ${generatingRandomQuotesFunction(onlytheTextfromtheQuotes)} "`
            
            newlyGeneratedQuoteDiv.append(newQuote)
        })
        
        function generatingRandomQuotesFunction(items){
            return items[Math.floor(Math.random()*items.length)]

        }// console.log(generatingRandomQuotesFunction(onlytheTextfromtheQuotes)) This works, it returns random quote strings 

    }

    //Functions for the Cards 


})


