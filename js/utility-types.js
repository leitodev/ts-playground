"use strict";
// Pick - взять какие то поля через 'field name' | 'field name'
const user1 = {
    name: 'John',
};
const user2 = {
    name: 'John',
    ip: 12332231,
};
// Omit - исключает 'name' | 'ip'
const user3 = {
    age: 18,
    address: 'address1',
};
// ReadonlyArray
const arrR = [1, 26, 765];
// Сделать все поля Интерфейса опциональными
const user4 = {
    name: 'John',
    ip: 1333,
};
// Все поля обязательны
const user5 = {
    name: 'John',
    age: 87,
    ip: 1333,
    address: 'qwewqe'
};
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
