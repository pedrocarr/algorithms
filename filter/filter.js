let clients = [];


(function createClients () {
  for (let i = 0; i < 50000; i++) {
    clients.push({
      name: `user a${i}`,
      id: i,
    })
  }
})()

// const arrayToObject = Object.assign({}, clients);



// console.time('filterClients')
// const filterClients = (id) => {
//   return console.log(arrayToObject.filter(clients => clients.id === id))
// }
// console.timeEnd('filterClients')

// filterClients(25000)