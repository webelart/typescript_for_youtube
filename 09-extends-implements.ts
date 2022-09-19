// // class User {}
// // class User1 {}

// // 1. Class can extends only one class
// // class Customer extends User {}


// // 2. Class can implements infinity count of interfaces
// // interface IUser {
// //     name: string;
// // }

// // interface IUser2 {
// //     surname: string;
// // }

// // class Customer2 implements IUser, IUser2 {
// //     name!: string;
// //     surname!: string;
// // }

// // 3. Class can implements infinity amount of classes
// // class User2 {
// //     name!: string;
// // }
// // class User3 {}


// // class Customer3 implements User2, User3 {
// //     name!: string;
// // }


// interface IUser {
//     name: string;
// }

// interface IUser3 {
//     birthday: string;
// }

// interface IUser2 extends IUser, IUser3 {
//     surname: string;
// }

// const obj: IUser2 = {
//     name: 'asdfa',
//     surname: 'asdfa',
//     birthday: 'asdfa'
// }

// // 4. Interface can extend infinity amount of other interfaces.
// // 5. Interface can't implement another interface.