function getLength(str){
    console.log("original string:", str);
    console.log("original length:", str.length);
}
getLength("Hello World");

function findIndex(str, target){
    console.log("Originnal String:", str);
    console.log("Index:", str.indexOf(target));
}
findIndex("Hello World", " Hello");

function getSlice(str, start, end){
    console.log("Original String:", str);
    console.log("After Slice", str.slice(start, end));

} // substr has been depreciated. It will not work 
getSlice("Hello World" ,0 , 5);

const str = "Hello World";
console.log(str.replace("he", "javaScript"));

// multiple functions include trim, split, etc.. which are used to configure strings to meet specific perimetres.

function explainParseInt(value){
    console.log("Original Value:", value);
    let result =  parseInt(value);
    console.log("After parseInt", result);
    // it will parse from a string to an integer.
}
const initialArray = [1,2,3];
initialArray.push(2);
console.log(initialArray);
// Shift, unshift are used to remove or put from the start. Similary, we use pop and push.

class Animal {
    constructor(name, legcount, speak){
        this.name = name;
        this.legcount = legCount;
        this.speak = speaks;
    }
    static
    speak(){
        console.log("Hell" + this.speaks);
    }
}

let dog  = new Animal("dog", 4 , "Woof Woof");
let cat = new Animal("cat", 4, "meow meow");
cat.speak();


// function that calculates time in secs it takes for the js code to calculate sum from 1 to n. Given n as input.
function calculateSum() {
    let a =0;
    for(let i =0 ; i<1000000;  i++){
        a = a+i;
    }return a;
}

const beforeDate = new Date();
const beforeTimeinMs =  beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeinMs = afterDate.getTime();
console.log(afterTimeinMs-beforeTimeinMs);

function currentTimePrint(){
    console.log(new Date(). getTime());
}
setInterval(currentTimePrint, 1000);

function replacer(key, value) {
    // Filtering out properties
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  }
  
  const foo = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7,
  };
  JSON.stringify(foo, replacer);
  // '{"week":45,"month":7}'