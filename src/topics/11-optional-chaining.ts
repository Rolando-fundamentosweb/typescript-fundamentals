export interface Passenger {
  name: string;
  children: string[] | null;
}

const passenger1: Passenger = {
  name: 'Fernando',
  children: null,
}

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger): number => {
  const { name: namePass } = passenger;
  // const howManyChildren = passenger.children?.length ?? 0;
  const howManyChildren = passenger.children!.length;

  console.log(`${namePass} - ${howManyChildren}`);

  return howManyChildren;
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
