function rand(arr) {
    return Math.floor(Math.random(arr)*arr.length);
    }

function mash(){
    if (process.argv[2] == 'Jaden' || process.argv[2] == 'jaden') {
        return `You will be a billionaire with 2 children a beautiful wife and you will own every company in the world. You will also own your own island and will be the richest person alive!`
    } else {
        return `Hi ${getName()}, you will live in a ${getHome()}, you will have ${getChildrenCount()} kids, and you will drive a ${getCar()}, with a salary of ${getSalary()}!!`;
    }
}

function getName() {
    if (process.argv[2]){
        return process.argv[2];
    } else {
        return 'player';
    }
}

function getHome() {
    let arr = ['mansion', 'apartment', 'shack', 'house', 'realm of hell', process.argv[3]];
    if (!process.argv[3]) {
        arr.pop();
    }
    return arr[rand(arr)];
}

function getChildrenCount() {
    let num = Math.floor(Math.random()*101);
    let num2 = process.argv[4];
    let chil = Math.floor(Math.random()*2);
    if (chil == 0 || !num2) {
        return num;
    } else if (chil == 1 && num2){
        return num2;
    }
}

function getCar() {
    let arr = ['lamborghini', 'convertible', 'jeep', 'rusty truck', 'banana', process.argv[5]];
    if (!process.argv[5]) {
        arr.pop();
    }
    return arr[rand(arr)];
}

function getSalary() {
    let x = Math.floor(Math.random()*1000000);
    return x;
}

console.log(mash());