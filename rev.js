//program for user and followers allocation
class following{
    constructor(user) {
        this.user = user
        this.followers = []
    }
      
    }

function addFollowers(follower) {
    if(follower.include(follower)) {
        console.log("already exist")
    }
    else{
        this.followers.push(follower)
    }
}
const Morin = new following("Morin")
Morin.followers = ("Njango","Mbira")
console.log(Morin)

  //capitalizing first letters in a sentence
function capitalizeFirstLetter(sentence) {
    let words = sentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    return words.join(" ");
}
console.log(capitalizeFirstLetter("my name is morin njango")); 


//finding longest word in a sentence

function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}
let sentence = "I love running around";
let longestWord = findLongestWord(sentence);
console.log(longestWord);

//Write a function that takes in an array of numbers and returns an array of unique values in ascending order, removing any duplicates.

function getUniqueValues(arr) {
    let uniqueValues = Array.from(new Set(arr));//returns a new array from an array objects.
    uniqueValues.sort((a, b) => a - b);
    
    return uniqueValues;
}
let numbers = [6, 1, 6, 3, 1, 4, 3];
console.log(getUniqueValues(numbers)); 

//Write a  function that takes two numbers as arguments and returns their sum. Explicitly specify the return type.
function sumNumber(num, number) {
    return num + number
    

}

console.log(sumNumber(12,14))

// //Write a Kotlin function that takes an integer as an argument and returns a Boolean indicating whether the number is prime or not. Use explicit return type
// function checkPrime(number){

// }
//you are developing a simulation for a factory product line .how would you represent the convayor belt where items move along the production line 
// //write a code to stimulate a convayor belt using your knowldge of data structures where items are added and removed from it as they enter and exit rthe convay belt.
// class ConvayorBelt{
//     constructor(){
//         this.item = []
//     }
//     additems(){
//         this.item.push(item)

//     }
//     removeitems(){
//         this.item.shift()//removing elements
//     }
// }
// const convayorBelt = new convayorBelt()
// convayorBelt.additems("manji")
// convayorBelt.additems("chocolate")
// //You are tasked with creating a simple inventory management system for an online store. 
// //The system should allow users to add new products, update existing product information, and remove products from the inventory.
// class Store{
//     constructor(){
//         this.product = []
//     }
//     addProduct(product) {
//         this.product.push(product)
//     }
//     removeItems() {
//         this.productoshift(product)
//     }
// }
// const store = new store()
// Store.addProduct("suger")
// Store.addProduct("milk")
// Store.addProduct("flour")
// console.log(Store)



//Write and invoke a function that given the string “Barnie bakes brown bagels
// and buns” prints out a list of all the other words and characters making up the
// string excluding all possible occurrences of the letter b.

function printWordsWithoutB(inputString) {
    let words = inputString.split(' ');
    
    for (let word of words) {
        let wordWithoutB = word.replace(/b/g, '').replace(/B/g, '');
        console.log(wordWithoutB);
    }
}

printWordsWithoutB("Barnie bakes brown bagels and buns");

//Write and invoke one function that takes in an array of integers and returns
// these 3 values: sum, count and average of all the elements.

function calculateArrayValues(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let count = arr.length;
    let average = sum / count;

    return { sum, count, average };
}

let array = [1, 2, 3, 4, 5];
let result = calculateArrayValues(array);
console.log(result);

// The volume of a sphere is calculated using the formula below

// V = 4/3 π r
// 3

// Write and invoke a function that is capable of accurately calculating the
// volume of any sphere given its radius. Use 3.14159 as π

function calculateSphereVolume(radius) {
    let pie = 3.14159
    return radius*pie*4.0/3
}

// var radius = 5; // Example radius
// var volume = calculateSphereVolume(radius);
console.log(calculateSphereVolume(5));