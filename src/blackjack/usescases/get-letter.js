

/**
 * 
 * @param {Array<String>} deck 
 * @returns {String}
 */
export const getLetter = (deck) => {
    
    if(!deck || !Array.isArray(deck) || !(deck.length > 0)) throw new Error('Deck is mandatory!'); 
    return deck.pop();

 }