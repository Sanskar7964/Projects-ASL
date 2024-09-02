/* console.log("Hello world");
console.log(a)
 */
/* let a = 1;
a =2;
console.log(a);


let firstName = "Sanskar";
let age = 21;
let isMarried = false;

console.log("this person name is" + firstName + "age is" + age);
 */
const ages = [21, 22, 23, 24 , 25];
const numberOfPeople = ages.length;

/* for(let i =0; i<numberOfPeople; ++i){
    if(ages[i]%2 == 0){
        console.log(ages[i]);
    }
} */

/* const allUsers = [{
    firstName: "Sankar",
    gender: " Male"
}, {
    firstName: "Priya",
    gender: "Female"
}

]

const users1 = {
    firstName: "Sanskar",
    gender:  "Male"
}

console.log(users1["gender"]) */
/* 
function sum(a, b){
    const SumValue = a+b;
    return SumValue;
}

const value = sum(1, 2)
console.log(value);

 */

function calculateArithmetic(a, b, type){
    if(type == "sum"){
        const value = sum(a, b);
        return value;
    }
    if(type == "minus"){
        const value = sub(a,b);
        return value; 
    }
}

function sum(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
