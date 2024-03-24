const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics', ratings: [5, 5, 4, 4, 5] },
    { name: 'Shirt', price: 20, category: 'Apparel', ratings: [4, 3, 5, 4, 4] },
    { name: 'Microwave', price: 150, category: 'Electronics', ratings: [4, 5, 4, 5] },
    { name: 'Shoes', price: 50, category: 'Apparel', ratings: [5, 5, 4, 4] },
    { name: 'Bag', price: 70, category: 'Apparel', ratings: [3, 4, 3, 4, 4] },
    { name: 'Headphones', price: 100, category: 'Electronics', ratings: [5, 5, 5, 4, 4] }
];


// Write names
products.forEach(item => console.log(item.name));

// Under 100
console.log('\n\nProduct under $100');
const under100 = products.filter(item => item.price < 100);
under100.forEach(item => console.log(item.name));


// Array with names
const names = products.map(item => item.name);
console.log('\n\nNames', names);

const anyWithRateUnder3 = products.filter(item => item.ratings.filter(rate => rate < 3).length).length;
console.log('\nWith rate under 3:', anyWithRateUnder3);

const areAllUnder1500 = products.reduce((accumulator, current) => accumulator || current.price <= 1500, false);
console.log('\nAre All Under $1500:', areAllUnder1500);

const firstEletronic = products.find(item => item.category === 'Electronics');
console.log('\nFirst Eletronic:', firstEletronic.name);

const totalPrice = products.reduce((accumulator, item) => accumulator + item.price, 0);
console.log('\nTotal Price:', totalPrice);

const averageRate = products.map(item => ({
    name: item.name,
    averageRate: item.ratings.reduce((accumulator, rate) => accumulator + rate, 0) / (item.ratings.length||1)
}));
console.log('\nAverage Rate:', averageRate);
