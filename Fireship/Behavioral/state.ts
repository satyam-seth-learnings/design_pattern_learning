// State

// Example - 1
// class Human {
//     think(mood) {
//         switch (mood) {
//             case 'happy':
//                 return 'I am happy 🙂';
//             case 'sad':
//                 return 'I am sad 🙁';
//             case 'neutral':
//                 return 'I am neutral 😐';
//         }
//     }
// }

// Example - 2
interface State {
    think(): string;
}

class HappyState implements State {
    think(): string {
        return 'I am happy 🙂';
    }
}

class SadState implements State {
    think(): string {
        return 'I am sad 🙁';
    }
}

class NeutralState implements State {
    think(): string {
        return 'I am neutral 😐';
    }
}

class Human {
    state: State;

    constructor() {
        this.state = new HappyState();
    }

    think() {
        return this.state.think();
    }

    changeState(state) {
        this.state = state;
    }
}