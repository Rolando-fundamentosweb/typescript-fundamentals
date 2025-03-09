type Identifier = 'dni' | 'ruc';

interface Persona {
  name: string;
  age: number;
  identifier: Identifier,
}

interface Animal {
  name: string;
  breed: string;
}

type Body = Persona | Animal;

const human: Body = {
  name: 'joe',
  age: 13,
  identifier: 'dni',
}
console.log(human);

const dog: Body = {
  name: 'blacky',
  breed: 'dachshund',
}
console.log(dog);