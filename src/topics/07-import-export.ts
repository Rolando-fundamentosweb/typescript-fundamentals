/*
   import type -> You should use type when the imported item is only
    used for type checking. So You want to avoid unnecessary javaScript
    import in the output compilation

 */
import type { Student } from "./06-functions-destructuring";
import { Product, taxCalculation } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100,
  },
  {
    description: 'iPad',
    price: 150,
  }
];

const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log(`Total: ${total}`);
console.log(`Tax: ${tax}`)

const student: Student = {
  name: 'chris',
  age: 12,
}
console.log(student);