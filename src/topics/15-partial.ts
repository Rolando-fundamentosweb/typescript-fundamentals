/*
  Partial<T> : crea un nuevo tipo donde todas las propiedades de T se
    convierten en opcionales.
*/
interface User {
  id: number;
  name: string;
  age: number;
}

// El tipo User te exige declarar todos los campos
const user: User = {
  id: 1,
  name: 'user1',
  age: 13
}
console.log({ user });

// El tipo PartialUser no te exige declarar todos los campos
type PartialUser = Partial<User>;
const user2: PartialUser = {};
console.log({ user2 });