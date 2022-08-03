const contacts = [{
  name: "John",
  id: 1,
}, 
{
  name: "Pedro",
  id: 2,
},
{
  name: "Maria",
  id: 3,
},
{
  name: "Joao",
  id: 4,
},
{
  name: "Joao",
  id: 5,
},
{
  name: "John",
  id: 6,
},
{
  name: "John",
  id: 7,
},
{
  name: "John",
  id: 8,
},
{
  name: "John",
  id: 9,
}
];

const filterContacts = (id, name) => {
  return id, name
}

const filter = contacts
              .filter(contact => contact.name === 'John')
             

console.log(filter)