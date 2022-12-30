import _ from 'underscore';


/**
 * 
 * @param {Array<string>} types Ex: ['C', 'D', 'H', 'S']
 * @param {Array<string>} specials Ex: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} get new deck
 */
export const createDeck = (types, specials) => {

    if( !types   || !Array.isArray(types)    || !types.length >0) throw new Error('Types is mandatory');
    if(!specials || !Array.isArray(specials) || !types.length >0) throw new Error('Specials is mandatory');
   
    let deck = [];
    for (let i = 2; i <= 10; i++) {
       for (let type of types) {
          deck.push(i + type);
       }
    }

    for (let type of types) {
       for (let special of specials) {
          deck.push(special + type);
       }
    }

    return _.shuffle(deck);
 }




