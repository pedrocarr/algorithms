var createUser = function(id, name) {
  return {id : id, name: name}
}
// var users = []
var users = {}

// var user

for(let id = 0; id <= 500000; id ++) {
  users[id] = users
  // users.push(createUser("u" + id, "user" + id))
}

// console.log(users)

var findUser = function (id) {
  result = users[id]
  return console.log(result)
  // result = users.find(user => user.id === id) || null
  // return result
}


findUser('28')
findUser('100000000')
