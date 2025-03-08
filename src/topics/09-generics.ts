export function whatsMyType<T>(arg: T): T {
  return arg;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' ').join('-')); // Hola-Mundo
console.log(amINumber.toFixed()); // 100
console.log(amIArray.join('-')); // 1-2-3-4-5
