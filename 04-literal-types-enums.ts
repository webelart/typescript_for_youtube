// // Literal types
// let env: 'development' | 'staging' | 'production' = 'development';

// function setEnv(currentEnv: 'development' | 'staging' | 'production'): 'development' | 'staging' | 'production' {
//     return currentEnv;
// }

// // Enum
// const enum Environment {
//     Development = 'development',
//     Staging = 'staging',
//     Production = 'production',
// }

// function setEnv2(currentEnv: Environment): Environment {
//     return currentEnv;
// }

// setEnv2(Environment.Development);

// // Type
// type Env = 'development' | 'staging' | 'production' | {};
// let env2: Env = 'development';
// function setEnv3(currentEnv: Env): Env {
//     return currentEnv;
// }

// setEnv3('development');

// // Unions & intersection

// type myType = { name: number, title: string } & { name: number, count: number };

// const myVar: myType = {
//     name: 1,
//     count: 1,
//     title: 'asdfasd'
// }



