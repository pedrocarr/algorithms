function revString(str) {
  return revString = [...str].reverse().join('');
}

const result = revString("Ola meu nome E pEDRO !!!")
console.log('result::: ', result);
// console.log('revString::: ', revString);


function reverseString(str) {

  if (!str || str.length < 2 || typeof str !== 'string') return

  const backwards = []

  const totalItemsIndex = str.length - 1

  for (let i = totalItemsIndex; i >= 0; i--) {
      backwards.push(str[i])
  }

  return backwards.join('')

}

const result2 = reverseString("Ola meu nome E pEDRO !!!")
console.log('result2::: ', result2);
