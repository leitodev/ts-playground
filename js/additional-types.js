"use strict";
// any
let someAny = 'xweer';
// unknown // более сейвый вариант any, будет ругатся на формат пока мы не обработаем его через IF
let pubg = 2016;
if (typeof pubg === 'number') {
    console.log('pubg is number!', pubg + 1);
}
// void - возвращать Ниче
function showMessage() {
    alert(pubg);
}
console.log(someAny);
console.log(pubg);
// Literal Types
let env = 'development';
function setEnv(myEnv) {
    return myEnv;
}
let env2 = 'development';
// Enums as Value and as Types
var Env3;
(function (Env3) {
    Env3["Development"] = "development";
    Env3["Staging"] = "staging";
    Env3["Production"] = "production";
})(Env3 || (Env3 = {}));
let env3 = Env3.Development;
console.log('env2', env2);
console.log('env3', env3);
let user23 = {
    username: 'George',
    surname: {
        name2: 'Georg2e',
    },
    id: 1234,
    age: 1234,
    phone: 343543
};
const fromServer = {
    some: 123,
    som3e: 123,
    // som6e: '123', // error type
};
