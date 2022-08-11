const axios = require('axios');


function callApi(name) {
  
  if (typeof name != 'string') throw new Error('not a string')
  if (name === '') throw new Error('string is empty')


  const url = `https://api.agify.io?name=${name}`


  return new Promise((resolve, reject) => {
    axios
      .get(url, {name: name})
      .then((response) => resolve(console.log(response.data)))
      .catch((err) => 
        reject(err))
      
    })
}

callApi('PEHEHEHENEE')