function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(0,4);
console.log (a);

let b = rand(0,4);
console.log(b);

if (a > b) {
 console.log(a/b);
  }
else {
    console.log(b/a);
} 

console.log('----------');

const masi = []

for(let i = 0; i < 3; i++){
    masi.push(rand(0,25));
}

if (masi[0] > masi[1] && masi[0] < masi[2] || masi[0] < masi[1] && masi[0] > masi[2]){
console.log(masi[0]);
}else if (masi[1] > masi[0] && masi[1] < masi[2] || masi[1] < masi[0] && masi[1] > masi[2]){
console.log(masi[1]);
}else{
    console.log(masi[2]);
 }
console.log(masi);

console.log('----------------');



for(let i = 0; i < 3; i++){
    masi.push(rand(1,10));
}
