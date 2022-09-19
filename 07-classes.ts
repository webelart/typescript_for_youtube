// interface IUser {
//     name: string;
//     surname: string;
//     printFullName(additionalName: string): string;
// }

// class User implements IUser {
//     name: string;
//     surname: string;

//     constructor(props: {name: string, surname: string}) {
//         this.name = props.name;
//         this.surname = props.surname;
//     }

//     printFullName(additionalName: string) {
//         return `${this.name} ${this.surname} ${additionalName}`;
//     }
// }

// class Customer extends User {
//     bill: number;
//     constructor(props: {name: string, surname: string, bill: number}) {
//         super(props);

//         this.bill = props.bill;
//     }
// }

// const customer = new Customer({
//     name: 'Elena',
//     surname: 'Litvinova',
//     bill: 1231,
// });

// customer.printFullName('asdfads');
// customer.name