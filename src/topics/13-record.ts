/*
Record -> Is a utility type that creates an object type where:
  K -> represents the key type which can be (string, number or symbol),
  T -> represents the value type for each key

When Can I use Record?
When you need key-value mappings with a fixed key type.
When defining lookup tables or dictionaries
*/


// Example: Using record with specific keys
type UserRole = Record<'admin' | 'client' | 'manager', string>;

const roles: UserRole = {
  admin: 'Administrator',
  client: 'Customer',
  manager: 'CEO',
}
console.log({ roles });

// Example: Using record for Complex Types
const register: Record<number, string> = {
  123: 'luck',
  124: 'peter',
  256: 'lue',
}
console.log({ register });

