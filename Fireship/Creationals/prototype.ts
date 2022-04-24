// Prototype

const zombie = {
    eatbrains() {
        return 'yum 🧠';
    }
}

const chad = Object.create(zombie, { name: { value: 'chad' } });

console.log(chad);

console.log(chad.eatbrains());

console.log(chad.__proto__);

console.log(Object.getPrototypeOf(chad));

// Array.prototype.bad = function () {
//     console.log('im bad');
// }