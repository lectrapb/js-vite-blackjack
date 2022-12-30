import { evaluateLetter } from "./evaluate-letter";

/**
 * 
 * @param {String} card 
 * @param {Number} turn 
 * @param {Array<String>} pointsPlayers 
 * @param {Array<String>} pointsHtml 
 * @returns {Array<Number>} pointsPlayers
 */
export const savePoints = (card,  turn, pointsPlayers, pointsHtml ) =>{
    

    if(!card ) throw new Error('Missing arguments card save points !');
    if( !(typeof turn === 'number') ) throw new Error('Missing arguments turn save points !');
    if(!pointsPlayers ) throw new Error('Missing arguments pointsPlayers save points !');
    if(!pointsHtml ) throw new Error('Missing arguments pointsHtml save points !');
     
    pointsPlayers[turn] = (pointsPlayers[turn] || 0) + evaluateLetter(card);
    pointsHtml[turn].innerText =  pointsPlayers[turn];
    return pointsPlayers[turn];
 }