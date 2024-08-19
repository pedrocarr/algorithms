import fs from 'fs'


const path = "note.txt"

const exercisePath = "data.txt"


fs.writeFileSync(path, "Hi, Pedro\n")

fs.appendFileSync(path, "Ola, meu amigo")


const result = fs.readFileSync("note.txt", "utf-8")




console.log(result)



fs.writeFileSync(exercisePath, "Hello World\n")

fs.appendFileSync(exercisePath, "Second Line")

const test = fs.readFileSync(exercisePath, "utf-8")

console.log(test)
