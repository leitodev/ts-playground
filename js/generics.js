"use strict";
const myModal = {
    title: 'Modal',
    data: {
        meta: 'some meta info'
    }
};
function getAllMaterials(url, res) {
    if (res && res.body) {
        return { body: res.body };
    }
    if (res && res.list) {
        return { list: [1, 3, 4, 5, 6, 7, 8, 9] };
    }
    return;
}
const data1 = getAllMaterials('https://', { list: [1, 3, 4] });
const data2 = getAllMaterials('https://', { body: 'some133' });
console.log('generic 1:', data1);
console.log('generic 2:', data2);
const myMegaVar = {
    type: 4000,
    name: 'NAME MEGA',
};
console.log('myMegaVar', myMegaVar);
// Generic object only!
const addId = (obj) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};
let user77 = {
    name: 'Jack'
};
let result = addId(user77);
console.log('result Jack', result);
// concat with generics
function strangeFunc(arg) {
    return arg;
}
const someStrange = strangeFunc({
    list: [1234, 123],
    body: 'qwewe'
});
// TypeGuards // Проверка типа
function isMaterial(obj) {
    return obj && obj.list && Array.isArray(obj.list) && obj.list.length > 0 && typeof obj.list[0] === 'number';
}
console.log('isMaterial', isMaterial({ list: [1, 1, 333, 44] }));
let niceObj = {
    name: 'stringName',
    data: true
};
console.log('niceObj', niceObj);
