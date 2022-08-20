const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];



function fetchPersonById(id) {
  return new Promise((resolve) => {
    
      if (persons.find(obj => obj.id === id)){
        return resolve(persons.find(obj => obj.id === id));
        }
  }
  );
 
}

fetchPersonById(1)
.then(console.log)

