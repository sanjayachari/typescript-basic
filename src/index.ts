type myStr = string;

let str : myStr = 'hello';

console.log(str)

interface Obj {
    name:string,
    age:number
}

let men : Obj ={
    name:'sanjay',
    age:23
};

console.log(men);

const myFun = (name:myStr) => {
    console.log(name);
}
myFun('menn')

interface Custom {
    bike: string
}

interface Costum2 extends Custom {
    car ?: string
}

let obj : Costum2 = {
    bike : 'honda',
    car : 'maruti'
}

console.log(obj);