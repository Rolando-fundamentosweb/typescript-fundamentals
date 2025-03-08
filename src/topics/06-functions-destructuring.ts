export interface Product {
  description: string;
  price: number;
}

export interface Student {
  name: string;
  age: number;
}

// const phone: Product = {
//   description: 'Nokia A1',
//   price: 150,
// }

// const tablet: Product = {
//   description: 'IPad Air',
//   price: 250.0,
// }

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  const { tax, products } = options;

  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  })
  return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [total, totalWithTax] = taxCalculation({
//   products: shoppingCart,
//   tax: tax,
// });

// console.log('Total', total);
// console.log('Tax', totalWithTax);