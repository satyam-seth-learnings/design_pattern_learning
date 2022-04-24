// Proxy

const original = { name: 'jeff' };

const reactive = new Proxy(original, {
    get(target, key) {
        console.log('Tracking: ', key);
        return target[key];
    },
    set(target, key, value) {
        console.log('Updating Ui...');
        return Reflect.set(target, key, value);
    },
});

reactive.name;

reactive.name = 'bob'