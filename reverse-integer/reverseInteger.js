const reverseInt = (int) => {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
}
