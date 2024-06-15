const axios = require('axios');


// function callApi(name) {

//   if (typeof name != 'string') throw new Error('not a string')
//   if (name === '') throw new Error('string is empty')


//   const url = `https://api.agify.io?name=${name}`


//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, {name: name})
//       .then((response) => resolve(console.log(response.data)))
//       .catch((err) =>
//         reject(err))

//     })
// }

// callApi('')


async function callSwapiApi(name){
  const url = `https://swapi.dev/api/people/?search=${name}`
  try {
    const response = await axios.get(url)
    const map = response.data.results
    map.forEach(element => {
      return console.log(element.name)
    });
  } catch (error) {
    console.error(error)
  }
}

callSwapiApi('a')

