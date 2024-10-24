interface Person {
    name: string;
    age: number;
    address?: string;
    ip: number;
}

// Pick - взять какие то поля через 'field name' | 'field name'
const user1: Pick<Person, 'name'> = {
    name: 'John',
}

const user2: Pick<Person, 'name' | 'ip'> = {
    name: 'John',
    ip: 12332231,
}

// Omit - исключает 'name' | 'ip'
const user3: Omit<Person, 'name' | 'ip'> = {
    age: 18,
    address: 'address1',
}

// ReadonlyArray
const arrR: ReadonlyArray<number> = [1,26, 765];


// Сделать все поля Интерфейса опциональными
const user4: Partial<Person> = {
    name: 'John',
    ip: 1333,
}

// Все поля обязательны
const user5: Required<Person> = {
    name: 'John',
    age: 87,
    ip: 1333,
    address: 'qwewqe'
}


// Record создание обьекта с типа который содержит ключи, и интерфейса для наполнения
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
    age: number;
    breed: string;
}

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
