import { getLetter } from "./get-letter";


const gameCPU = (minimusPoints, pointsPlayers, deck) => {

    if(!minimusPoints) throw new Error('minimusPoints is mandatory!');
    if(!deck) throw new Error('deck is mandatory!');
    if(!pointsPlayers) throw new Error('pointsPlayers is mandatory!');

    let pointsCpu  = 0;

    do {
       const card = getLetter(deck);
       const turnCpu = pointsPlayers.length -1;
       pointsCpu =  savePoints(card, turnCpu);
       createCard(card, turnCpu);

       if (minimusPoints > 21) {
          break;
       }

    } while ((pointsCpu < minimusPoints) && (minimusPoints <= 21));

   
    selectWin();

 }