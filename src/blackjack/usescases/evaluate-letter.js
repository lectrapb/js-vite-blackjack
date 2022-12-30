


/**
 * 
 * @param {String} letter 
 * @returns {Number} Value letter
 */
export const evaluateLetter = (letter) => {

    if(!letter ||  !(typeof letter === 'string')) throw new Error(' letter is mandatory !');

    const value = letter.substring(0, letter.length - 1);
    return (isNaN(value)) ?
       (value === 'A') ? 11 : 10
       : (value * 1);
 }