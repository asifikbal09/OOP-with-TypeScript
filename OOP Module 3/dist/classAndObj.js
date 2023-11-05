"use strict";
{
    //class and Object
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("Tom", "Dog", "Ghew Ghew");
    const cat = new Animal("Zoro", "Cat", "meaw meaw");
    dog.makeSound;
    cat.makeSound;
}
