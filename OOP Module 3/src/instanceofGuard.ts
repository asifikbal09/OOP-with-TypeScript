{
  //Instanceof Guard
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am meawing");
    }
  }

  const getDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const getCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (getDog(animal)) {
      animal.makeBark();
    } else if (getCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Rocksy", "dog");
  const cat = new Cat("Zoro", "cat");

  getAnimal(dog);
  getAnimal(cat);
  //
}
