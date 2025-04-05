class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        throw new Error("Subclass must implement this method");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }

    speak() {
        return `${this.name} says Woof!`;
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name, "Cat");
        this.breed = breed;
    }

    speak() {
        return `${this.name} says Meow!`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Siamese");

console.log(dog.speak());
console.log(cat.speak());
