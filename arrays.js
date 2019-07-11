let grades = [93,100,65,84,80];
console.log(1, 3); 

const coins = [
    1,
    5,
    10,
    25,
    50
];
console.log(coins[0]);
console.log(coins[1]);
console.log(coins[2]);
console.log(coins[3]);
console.log(coins[4]);

const lunchSpecials = [
    5,
    10,
    6,
    7,
];
lunchSpecials[0] *= 2;
lunchSpecials[1] *= 2;
lunchSpecials[2] *= 2;
lunchSpecials[3] *= 2;
console.log(lunchSpecials);

const list = [1,2,3,4];
//list.splice(0,4,0,0,0,0);
list.push(5);
/*list.pop();
list.pop();*/
//list.unshift(7,6);
//list.reverse();
list.splice(3,1,99);
console.log(list);


for (let i=0; i<coins.length; i++){
    console.log(coins[i]*2);
}

let draw = "";

for (let i=0; i<10; i++){
    console.log(draw);
    draw += '* ';
    
}
