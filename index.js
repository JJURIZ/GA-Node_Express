const { randy } = require(`./otherModule`);


const myTernary = (num) => {
    return num >= 0 ? 
    `Your number is ${num} and it's equal or more than zero.`:
    `Your number is ${num} and it's less than zero.`
}

console.log(myTernary(2));
console.log(myTernary(-3));
console.log(myTernary(100));
console.log(myTernary(-34256));

console.log(myTernary(randy()));
console.log(myTernary(randy()));

