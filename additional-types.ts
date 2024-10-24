
// any
let someAny: any = 'xweer';

// unknown // более сейвый вариант any, будет ругатся на формат пока мы не обработаем его через IF
let pubg: unknown = 2016;

if (typeof pubg === 'number') {
    console.log('pubg is number!', pubg+1);
}

// void - возвращать Ниче
function showMessage(): void {
    alert(pubg);
}

console.log(someAny);
console.log(pubg);

// Literal Types
let env: 'development' | 'production' | 'staging' = 'development';

function setEnv(myEnv: 'development' | 'production' | 'staging'): 'development' | 'production' | 'staging' {
    return myEnv;
}

// Types
type Env = 'development' | 'production' | 'staging';
let env2: Env = 'development';


// Enums as Value and as Types
enum Env3 {
    Development = 'development',
    Staging = 'staging',
    Production = 'production',
}

let env3: Env3 = Env3.Development;

interface IEnvObject {
    server: string,
    enum: Env3
}

console.log('env2', env2);
console.log('env3', env3);

// Interfaces
interface UserI {
    username: string;
    surname: {
        name2: string
    };
    id: number | string;
    age?: number;
}

interface AdditionalUser extends UserI {
    readonly phone: number;
}

let user23: AdditionalUser = {
    username: 'George',
    surname: {
        name2: 'Georg2e',
    },
    id: 1234,
    age: 1234,
    phone: 343543
}

interface FromServer {
    [name: string]: number;
}

const fromServer: FromServer = {
    some: 123,
    som3e: 123,
    // som6e: '123', // error type
}




