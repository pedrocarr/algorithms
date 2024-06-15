const { get } = require('axios')




async function getPeople(name) {
  const url = `https://swapi.dev/api/people/?search=${name}`
  const result = await get(url)

  const nameAndMass = result.data.results.map(mapPeople)

  return nameAndMass
}

function mapPeople(item) {
  return {
    name: item.name,
    mass: item.mass
  }
}


module.exports = {
  getPeople
}
