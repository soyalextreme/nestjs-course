const myName = 'nicolas';

const myAge = 23;

const sum = (a: number, b: number) => {
  return a + b;
};

sum(10, 20);

class Person {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `Name: ${this.name}\nAge: ${this.age}`;
  }
}

const alejandro = new Person(23, 'Alejandro');

alejandro.getSummary();