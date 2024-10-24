
// Interface with Generic
interface IModal<T> {
    title: string;
    data: T;
}

const myModal: IModal<{ meta: string }> = {
    title: 'Modal',
    data: {
        meta: 'some meta info'
    }
}

interface Material {
    list: number[]
}

interface MaterialBody {
    body:  string
}

function getAllMaterials<T>(url: string, res: any): T | undefined {

    if (res && res.body) {
        return {body: res.body} as T;
    }

    if (res && res.list) {
        return {list: [1, 3, 4, 5, 6, 7, 8, 9]} as T;
    }
    return;
}

const data1 = getAllMaterials<Material>('https://', {list: [1, 3, 4]});
const data2 =  getAllMaterials<MaterialBody>('https://', {body: 'some133'});

console.log('generic 1:', data1);
console.log('generic 2:', data2);


// GENERICS with Interfaces
interface MyMegaType<T> {
    type: T;
    name: string;
}

const myMegaVar: MyMegaType<number> = {
    type: 4000,
    name: 'NAME MEGA',
}
console.log('myMegaVar', myMegaVar);

// Generic object only!
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};

interface IUser77 {
    name: string;
}

let user77 = {
    name: 'Jack'
}

let result = addId<IUser77>(user77);
console.log('result Jack', result);



// concat with generics
function strangeFunc<T extends MaterialBody>(arg: T): T {
    return arg;
}

interface FullMaterial extends Material, MaterialBody {}

const someStrange = strangeFunc<FullMaterial>({
    list: [1234, 123],
    body: 'qwewe'
});


// TypeGuards // Проверка типа
function isMaterial(obj: any): obj is Material {
    return obj && obj.list && Array.isArray(obj.list) && obj.list.length > 0 && typeof obj.list[0] === 'number';
}

console.log('isMaterial', isMaterial({list: [1, 1, 333, 44]}));

// Interface with Generic
interface IwithG<T> {
    name: string;
    data: T
}

let niceObj: IwithG<boolean> = {
    name: 'stringName',
    data: true
}
console.log('niceObj', niceObj);






