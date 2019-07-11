let Number = 3;
let  String = "string";
let Boolean = true;

console.log(Number);
console.log(String);
console.log(Boolean);

let reg = 45;
let frRow = 75;
let cost = frRow*2 +reg*4;
let cost2 = cost*1.5;
let cost3 = cost2*0.2;
let cost4 = cost2 - cost3 - cost;
//console.log('Cost: ' + cost, 'Selling price: ' + cost2, 'Seller fee: ' + cost3, 'Total profit: ' + cost4);
console.log('Cost: ' + cost);
console.log('Selling price: ' + cost2);
console.log('Seller fee: ' + cost3);
console.log('Total profit: ' + cost4);

/*// We're going to earn a profit by reselling tickets
// We bought some tickets to see SZA!
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
console.log('Cost: ' + (45 * 4 + 75 * 2));

// we're selling them for 50% more lol.
console.log('Selling price: ' + (45 * 4 + 75 * 2) * 1.5);

// But StubHub, the online ticket selling platform, charges a 20% seller fee...
console.log('Seller fee: ' + (45 * 4 + 75 * 2) * 1.5 * 0.2);

// So here's our total profit:
console.log('Total profit: ' + ((45 * 4 + 75 * 2) * 1.5  - (45 * 4 + 75 * 2) * 1.5 * 0.2 - (45 * 4 + 75 * 2)));*/

let ages = [15, 7, 9, "hello", true];

ages.splice(2,1,8);

// delete ages[3];

console.log(ages);


