//1

function n(num1, num2, ...nums) {
    let multiple = 1;
    for (i of nums) {
      multiple *= i;
    }

    return [num1 + num2, multiple];
  }
  
  console.log(n(1, 2, 3, 4, 5, 6, 7, 8, 9));


//2

const user = {
    name: 'Django',
    breed: 'Cane Corso',
    address: {
        country: 'Georgia',
        city: 'Tbilisi'
    }
}

const {name, breed, address: {country, city}} = user;
console.log(city);

//3

const user1 = {
    name: 'Ana',
    address: {
        country: 'Georgia',
        city: 'Tbilisi'
    }
}

const user2 = {... user1};
user2.address.city='Blois';

console.log(user1.name, user2.address.city);