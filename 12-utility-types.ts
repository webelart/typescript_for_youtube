interface Accomodation {
    title: string;
    location: string;
    address: string;
    countOfRooms?: number;
}

const obj: Pick<Accomodation, 'title' | 'address'> = {
    title: 'asdfa',
    address: 'asdfas'
}

const obj2: Omit<Accomodation, 'title' | 'address'> = {
    location: 'asdfa',
    countOfRooms: 1
}

const numArr: ReadonlyArray<number> = [1,2,3];

numArr.map(() => 1);

const obj3: Required<Accomodation> = {
    title: 'asdfa',
    address: 'asdfas',
    location: 'asdfa',
    countOfRooms: 1
}

const obj4: Partial<Accomodation> = {
    title: 'asdfa',
    address: 'asdfas',
    location: 'asdfa',
    countOfRooms: 1,
}


interface CatInfo {
    age: number;
    color: string;
}

type CatName = 'miffy' | 'boris';

const enum CatNameEnum {
    Miffy = 'miffy',
    Boris = 'boris',
}

const cats: Record<CatNameEnum, CatInfo> = {
    [CatNameEnum.Miffy]: { age: 1, color: 'black', hh: 12312 },
    [CatNameEnum.Boris]: { age: 1, color: 'black' },
}

// Create own utility
type ObjectKeys<T extends object> = keyof T;

interface Obj {
    name: string;
    surname: string;
}

const myVar: ObjectKeys<Obj> = 'surname';