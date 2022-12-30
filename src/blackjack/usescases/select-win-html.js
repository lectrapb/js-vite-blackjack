
/**
 * 
 * @param {Array<Number>} pointsPlayers 
 */
 export const selectWin = (pointsPlayers) =>{

    if(!pointsPlayers)throw new Error('Missing arguments pointsPlayers');

    const [minimusPoints, pointsCpu] = pointsPlayers;

    setTimeout(() => {

       if (pointsCpu === minimusPoints) {
          alert('Nadie gana :C');
       } else if (minimusPoints > 21) {
          alert('Cpu Win!');
       } else if (pointsCpu > 21) {
          alert('Player Win! ');
       } else {
          alert('Cpu Win!');
       }

    }, 500);
 }