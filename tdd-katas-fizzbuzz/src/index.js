const FIZZ = 'Fizz';
const BUZZ = 'Buzz';


const processInteger = (n) => {

const divisibleBy5 = n % 5;
const divisibleBy3 = n % 3;

if(divisibleBy5 === 0 && divisibleBy3 === 0) 
  return FIZZ + BUZZ 
if(divisibleBy5 === 0) 
  return BUZZ
if(divisibleBy3 === 0) 
  return FIZZ

  return n
}


module.exports.processInteger = processInteger;


