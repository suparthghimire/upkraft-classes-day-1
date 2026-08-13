class Counter {
    count = 0; // Instance property
    static created = 0; // Static property

    constructor() {
        Counter.created++; // Increments each time a new instance is created
    }

    // Instance Method: Mutates state for a specific counter object
    increment() {
        this.count++;
    }

    // Static Method: Utility operating on class-level data
    static getCreatedCount() {
        return `Total Counter instances created: ${Counter.created}`;
    }

    // Static Method: Compares two counter instances
    static compare(counterA, counterB) {
        return counterA.count - counterB.count;
    }
}

export default Counter;

const c1 = new Counter();
c1.increment();
c1.increment(); // c1.count = 2

const c2 = new Counter();
c2.increment(); // c2.count = 1

// Calling static methods on the Class directly
console.log(Counter.getCreatedCount()); // "Total Counter instances created: 2"
console.log(Counter.compare(c1, c2));    // 1 (since 2 > 1)

// Calling instance method on an object
console.log(c1.count); // 2