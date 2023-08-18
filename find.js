/* THIS FILE IS NO WAY RELATED TO THIS REACT PROJECT : Todo List using Redux */

/* As find() method in js is important, just providing some codes for better understanding of find() method in js */

const names = ['Florin', 'Ivan', 'Liam'];

//console.log(names.find()); // undefined

function findIvan(item){
    return item === 'Ivan';
}

console.log(names.find(findIvan)); // Ivan

const persons = [
    {
       name: 'Florin',
         age: 25 
    },
    {
        name: 'Ivan',
        age: 20
    },
    {
        name: 'Liam',
        age: 18
    }
];

function findFlorin(person){
    return person.name === "Florin";
}

console.log(persons.find(findFlorin));