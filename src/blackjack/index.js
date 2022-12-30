import _ from "underscore";

import{createDeck, savePoints, getLetter, createCard, selectWin} from './usescases'
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Sword
 * 2C = Two of Clubs
 */

  let deck = [];
  const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'];

  let pointsPlayers = [];

  //Html ref
  const btnNewGame = document.querySelector('#btnNewGame'),
        btnGet = document.querySelector('#btngetLetter'),
        btnStop = document.querySelector('#btnStop'),
        pointsHtml = document.querySelectorAll('span'),
        divCardsPlayers = document.querySelectorAll('.divCartas');



  const initGame = (numPlayers = 2) =>{
      
      deck =  createDeck(types, specials);
      pointsPlayers = [];

      for(let i = 0; i < numPlayers; i++){
         pointsPlayers.push(1);
      }

      pointsHtml.forEach(      element => element.innerText = 0 );
      divCardsPlayers.forEach( element => element.innerHTML = '');
           
      btnGet.disabled = false;
      btnStop.disabled = false
     


  }
  

 

  const gameCPU = (minimusPoints) => {

     let pointsCpu  = 0;

     do {
        const card = getLetter(deck);
        const turnCpu = pointsPlayers.length -1;
        pointsCpu =  savePoints(card, turnCpu, pointsPlayers, pointsHtml);
        createCard(card, turnCpu, divCardsPlayers);

        if (minimusPoints > 21) {
           break;
        }

     } while ((pointsCpu < minimusPoints) && (minimusPoints <= 21));

    
     selectWin(pointsPlayers);

  }


  //Eventos 
  btnGet.addEventListener('click', () => {


     const card = getLetter(deck);
     const pointsPlayer  =  savePoints(card, 0, pointsPlayers, pointsHtml);

     createCard(card, 0, divCardsPlayers);

     if (pointsPlayer > 21) {

        btnGet.disabled = true;
        btnStop.disabled = true;
        gameCPU(pointsPlayer);

     } else if (pointsPlayer === 21) {

        btnGet.disabled = true;
        btnStop.disabled = true;
        gameCPU(pointsPlayer);
     }


  });

  btnStop.addEventListener('click', () => {

     btnGet.disabled = true;
     btnStop.disabled = true;

     gameCPU(pointsPlayers[0]);
  });

  btnNewGame.addEventListener('click', () => {

     initGame();
  });

  























