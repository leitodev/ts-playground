const obj = {
    user: 1
}
obj.user = 2;


const arr: number[] = [1,2,3];
const arrOfString: string[] = ['s', 'qqqq', 'qqqxxwee'];
const arrMixed: (string | number)[] = [1, 3, '55', 'go'];


// Tuples
const cordinates: [number, number] = [104.13, 84.54];


console.log(obj);
console.log('array', arr, arrOfString);
console.log('Tuples', cordinates);