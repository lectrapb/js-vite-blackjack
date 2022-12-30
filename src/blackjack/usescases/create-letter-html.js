
/**
 * 
 * @param {String} card 
 * @param {Number} turn 
 * @param {Html} divCardsPlayers 
 */
export const createCard = ( card, turn, divCardsPlayers ) =>{

    if(!card)                       throw new Error('Missing argument card is mandatory');
    if(!(typeof turn === 'number')) throw new Error('Missing argument turn is mandatory');
    if(!divCardsPlayers)            throw new Error('Missing argument divCardsPlayers is mandatory');

    const imgCard = document.createElement('img');
    imgCard.classList.add('carta');
    imgCard.src = `assets/cartas/${card}.png`;

    divCardsPlayers[turn].append(imgCard);
   

}