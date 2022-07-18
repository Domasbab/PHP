[1,5,77].forEach(a => console.log(a));

console.log('---------');

[1,5,77].forEach(a => {
if (a < 4)  {
    console.log(a)
}
})

console.log('---------')

const mas = [];

// mas[0] = 'Petras';
// mas[1] = 'Ieva';
// mas.push('bebras');
// mas.unshift('Kurmis');

for (let i = 0; i < 10; i++) {
mas[i] = rand(7, 77);
}

console.log(mas);
