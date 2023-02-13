class Mammal {
  constructor(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.mammaryGland = true;
  }

  incrementAge() {
    this.age++;
  }
}

class Lion extends Mammal {
  constructor(species, name, age, manEater) {
    super(species, name, age, manEater);
  }

  eatZebras(animals) {
    return animals.filter((animal) => animal.species !== "zebra");
  }
}

const zeca = new Mammal("zebra", "zeca", 6);
const pompeu = new Mammal("gnu", "pompeu", 5);
const angus = new Mammal("cavalo", "angus", 3);
const mufasa = new Lion("leão", "mufasa", 3, false);
const animal = [zeca, pompeu, angus];

const eatZebra = mufasa.eatZebras(animal);

console.log(mufasa);

console.log(eatZebra);
