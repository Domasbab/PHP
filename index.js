function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
const mas = [...Array(10)].map(_=> rand(7,77));

const man = [];

mas[0] = 'Petras';
mas[1] = 'Ieva';

mas.push('Bebras');

mas.unshift('Kurmis');

for (let i = 0; i < 10; i++){
    mas.push(rand(7,77));
}
console.log(mas);

const cats = ['Murka', 'Pilkis', 'Rainius'];
console.log(cats[rand(0,2)]);

console.log(mas);

for (let i =0; i < 10; i++) {
    console.log(mas[i]);
}

mas.forEach(n => console.log(n));

mas[0] = 'Petras';

mas[5] = 'Petrauskas';

function getRandom() {
    return Math.random();
  }

  console.log 

console.log  ('----------');

let a = rand(0,4);
console.log (a);

let b = rand(0,4);
console.log(b);


console.log('--------------');





