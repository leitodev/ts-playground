
/*
    Primitive types
    boolean
    number
    string
    null
    undefined
    symbol
    bigint
 */

let isAllOk = true;
let userName: string = 'George';
let age: number = 31;
let myNull: null = null;
let myUndefined: undefined = undefined;
let mySymbol = Symbol('qwer');
let bigIntValue = 13123n;

console.log('primitives')
console.log(userName, age, isAllOk, myNull, myUndefined, mySymbol, bigIntValue);


type TStatus = 'apply' | 'notapplly';

interface IUserFromBack {
    name: string;
    email: string;
    id: number;
    status?: TStatus;
}

const someUser: IUserFromBack = {
    name: 'qwewqe',
    email: 'some@email.com',
    id: 123,
}



