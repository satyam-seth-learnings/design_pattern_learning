// Builder

// Without Builder
// class HotDog {
//     constructor(
//         public bun: string,
//         public ketchup: boolean,
//         public mustard: boolean,
//         public kraut: boolean
//     ) { }
// }

// new HotDog('wheat', false, true, true)

// With Builder
class HotDog {
    constructor(
        public bun: string,
        public ketchup?: boolean,
        public mustard?: boolean,
        public kraut?: boolean
    ) { }

    addKetchup() {
        this.ketchup = true;
        return this;
    }

    addMustard() {
        this.mustard = true;
        return this;
    }

    addKraut() {
        this.kraut = true;
        return this;
    }
}

const myLunch=new HotDog('gluten free');

myLunch
.addKetchup()
.addMustard()
.addKraut()