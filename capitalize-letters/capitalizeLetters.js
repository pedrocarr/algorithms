/**
 *
 * @param {string} str
 * @returns
 */
const capitalizeLetters = (str) => {
  return str
  .toLowerCase()
  .split(' ')
  .map(word => word[0].toUpperCase() + word.substring(1))
  .join(' ');
}

const result = capitalizeLetters("Eu ppreciso de AJUDA para passar na orAcle")
const result2 = capitalizeLetters("Eu vou passar na Oracle de AJUDA para passar na orAcle")
console.log("🚀 ~ result:", result)


