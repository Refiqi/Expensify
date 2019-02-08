const person = {
    name: 'Refiqi',
    age: 19,
    location: {
        in: 'SMI',
        temp: '30'
    }
};

const { name: first = 'Anonymous', age } = person;

console.log(`${first} is ${age} years old`);

const items = ['Coffe (hot)', '$2.00', '$2.50', '$3.00' ]

const [item, s, m, l] = items;

console.log(`Your ${item} cost ${m} medium size cup.`)