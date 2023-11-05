{
  //class and Object

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Tom", "Dog", "ghew ghew");
  const cat = new Animal("Zoro", "Cat", "meaw meaw");

  dog.makeSound();
  cat.makeSound();
}
