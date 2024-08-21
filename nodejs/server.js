// import fs from 'fs'


// const path = "note.txt"

// const exercisePath = "data.txt"


// fs.writeFileSync(path, "Hi, Pedro\n")

// fs.appendFileSync(path, "Ola, meu amigo")


// const result = fs.readFileSync("note.txt", "utf-8")




// console.log(result)



// fs.writeFileSync(exercisePath, "Hello World\n")

// fs.appendFileSync(exercisePath, "Second Line")

// const test = fs.readFileSync(exercisePath, "utf-8")

// console.log(test)


import express from 'express'



const app = express()


const users = [
  {
    id: 1,
    name: "Pedro"
  }
]

// app.use(express.json())


app.get('/users', (req, res, next) => {
  res.json(users)

})


app.listen(3000, () => {
  console.log("app is running na porta 3000")
})

const longTask = (a,b,c) => {
  // 10 h task
}

/*
const a = {
...payload
id: 1
}
const b = {
...payload
id: 2
}
const c = {
...payload
id: 3
}
*/

/*

*/


const cache = {}


const memoizedLongTask = (a, b, c) => {
  const key = `${a.id}-${b.id}-${c.id}`


  if (cache[key]) {
    return cache[key]
  }

  const result = longTask(a, b, c)


  cache[key] = result

  return result

}

const asyncLongtask = async (a, b, c) => {
  const result = new Promise((resolve) => {
    setTimeout(()=> resolve(longTask(a,b,c)), 0)
  })

  return result
}



const asyncLongTask = (a, b, c) => {
  const result = new Promise((resolve) =>{
    return setTimeout(()=> resolve(longTask(a,b,c)), 0)
  })


  return result
}


const cache2 = {}

const memoizedLongTask2 = (a,b,c) => {
  const key = `${a.id}-${b.id}-${c.id}`


  if (cache2[key]) {
    return cache2[key]
  }

  const result = longTask(a,b,c)

  cache2[key] = result


  return result
}
