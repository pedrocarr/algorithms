const sumOfTwoDigitsOfNumbers = (n) => {

  // let str = n.toString();

  // console.log(str);

  // let arr = str.split('');

  // console.log(arr);

  // let newArray = arr.map(Number);

  // console.log(newArray);


  // return newArray[0] + newArray[1]

  let str = n.toString()
    if (n >= 10 && n < 100){
        return +str[0] + +str[1]
    }



}

console.log(sumOfTwoDigitsOfNumbers(990));
