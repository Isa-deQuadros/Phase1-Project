

document.addEventListener("DOMContentLoaded", function(){
    let openHand = false
    const myHandofCards = document.querySelector('#mycurrentHand')
    myHandofCards.style.display = 'none';



    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => sectiontodowithCards(data))

    fetch('https://type.fit/api/quotes')// this Quotes API works
    .then( res => res.json())
    .then( quotesData => usingQuotesData(quotesData))

    // Functions for the Quotes
    function usingQuotesData(quotesArrays){
        const oneHundredquotes= (quotesArrays.slice(0,99))
        const onlytheTextfromtheQuotes = oneHundredquotes.map(oneHundredquotes =>{
            return oneHundredquotes.text
        })
        const newlyGeneratedQuoteDiv = document.querySelector('#quote')
        const buttontoGenerateNewRandomQuote = document.querySelector('#quote-button')
        buttontoGenerateNewRandomQuote.addEventListener('click', function(){
            const newQuote = document.createElement('h4')
            newlyGeneratedQuoteDiv.innerHTML = ''
            newQuote.textContent = `" ${generatingRandomitemsFunction(onlytheTextfromtheQuotes)} "`
            
            newlyGeneratedQuoteDiv.append(newQuote)
        })
        function generatingRandomitemsFunction(items){
            return items[Math.floor(Math.random()*items.length)]
        }
    }

    //Functions for the Cards 

    function sectiontodowithCards(thecardimagedata){
    
        //Temporary MouseEnter until ImageAPI is discovered
        const messageforMissingImageAPI = document.querySelector('#players-arena')
        const messageLocation = document.querySelector('#pause-message')
        messageforMissingImageAPI.addEventListener("mouseover", function(){
            const message = document.createElement('h2')
            const messageImage = document.createElement('img')
            messageImage.className = "pause-Image"
            messageLocation.innerHTML = ''

            message.textContent = "Coming as soon as I can find an API that works!"
            messageImage.src = thecardimagedata.message

            messageLocation.append(message, messageImage)
        })


         // players cards 
        const Player1playedCard = document.querySelector('#player1cards')
        const Player2playedCard = document.querySelector('#player2cards')
        const Player3playedCard = document.querySelector('#player3cards')
        const Player4playedCard = document.querySelector('#player4cards')
        const Player5playedCard = document.querySelector('#your-play-card')
        const WinningPlayer = document.querySelector('#round-winner')

        // playing my hand 
        const card1 = document.querySelector('#my-first-card')
            card1.textContent= " In the future this will be an awesome meme"
        const card2 = document.querySelector('#my-second-card')
            card2.textContent= "Second Random Meme"
        const card3 = document.querySelector('#my-third-card')
            card3.textContent= "Third Random Meme"
        const card4 = document.querySelector('#my-fourth-card')
            card4.textContent= "Fourth Random Meme"
        const card5 = document.querySelector('#my-fifth-card')
            card5.textContent= "Fifth Random Meme"


        const myHandButton = document.querySelector('#my-cards-button')
        const mypotentialCards = document.querySelector('#mycurrentHand')
        myHandButton.addEventListener('click', function (){
            console.log(openHand)
            openHand = !openHand;
            console.log(openHand)
            if(openHand){
                mypotentialCards.style.display='block';
            } else {
                mypotentialCards.style.display = 'none';
            }
        })
        
        
        card1.addEventListener('click', function(){
            Player5playedCard.textContent = "The future is not today"
        })
        card2.addEventListener('click', function(){
            Player5playedCard.textContent = 'card2'
        })
        card3.addEventListener('click', function(){
            Player5playedCard.textContent = 'card3'
        })
        card4.addEventListener('click', function(){
            Player5playedCard.textContent = 'card4'
        })
        card5.addEventListener('click', function(){
            Player5playedCard.textContent = 'card5'
        })


        

        // things to do with points 

            let startingPoints= {
                player1: 0,
                player2: 0,
                player3: 0,
                player4: 0,
                player5: 0
            }

            Player1playedCard.addEventListener("click", function(){
                WinningPlayer.textContent = "Player 1!"
                const P1Points = document.querySelector('#P1')
                P1Points.textContent = `P1: ${++ startingPoints.player1}`
            })
            Player2playedCard.addEventListener("click", function(){
                WinningPlayer.textContent = "Player 2!"
                const P2Points = document.querySelector('#P2')
                P2Points.textContent = `P2: ${++ startingPoints.player2}`
            })
            Player3playedCard.addEventListener("click", function(){
                WinningPlayer.textContent = "Player 3!"
                const P3Points = document.querySelector('#P3')
                P3Points.textContent = `P3: ${++ startingPoints.player3}`
            })
            Player4playedCard.addEventListener("click", function(){
                WinningPlayer.textContent = "Player 4!"
                const P4Points = document.querySelector('#P4')
                P4Points.textContent = `P4: ${++ startingPoints.player4}`
            })
            Player5playedCard.addEventListener("click", function(){
                WinningPlayer.textContent = "Player 5!"
                const P5Points = document.querySelector('#P5')
                P5Points.textContent = `P5: ${++ startingPoints.player5}`
            })
        }

    })