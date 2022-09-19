// function identity<Base>(arg: Base): Base {

//     let myVar: Base
//     return arg;
// }

// identity<string>('adsfasd');

// interface Options {
//     query?: string;
// }

// interface User {
//     name: string;
//     surname: string;
// }

// interface Article {
//     title: string;
//     author: string;
//     content: string;
// }


// function makeRequest<T>(url: string, options: Options): T {
//     return [] as T;
// }

// //....

// const users = makeRequest<User[]>('/getUsers', {});
// const articles = makeRequest<Article[]>('/getArticles', {});



// function identity2<OptionsType, ReturnType>(options: OptionsType): ReturnType {
//     return [] as ReturnType;
// }

// // Interfaces
// const sss = identity2<string, number>('asdfasd');

// interface Test<T> {
//     type: T;
//     name: string;
// }

// const obj12: Test<number> = {
//     type: 12312,
//     name: 'sdfad'
// }

// // Classes

// class MySuperClass<T> {
//     name: T;

//     constructor(name: T) {
//         this.name = name;
//     }
// }

// const mySuperClass = new MySuperClass<string>('13412');
// const mySuperClass2 = new MySuperClass<number>(12412);

// // Extends & Default

// interface MinFunctionInfo {
//     length: number;
// }

// interface DefaultCalulate {
//     name: string;
//     length: number;
// }

// function calculateLength<T extends MinFunctionInfo = DefaultCalulate>(args: T): number {
//     return args.length;
// }

// interface Props {
//     name: string;
//     length: number;
// }

// calculateLength({
//     name: 'asdfasd',
//     length: 1231,
// });