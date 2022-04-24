// Iterator

const cart = ['apple', 'banana', 'orange'];

for (const item in cart) {
    console.log(item);
}

function range(start: number, end: number, step = 1) {
    return {
        [Symbol.iterator]() {
            return this; // use it with for of
        },
        next() {
            if (start < end) {
                start = start + step;
                return { value: start, done: false };
            }
            return { done: true, value: end };
        }
    }
}

for (const n of range(0, 100, 5)) {
    console.log(n); // 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95
}