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
    let uniqueValues = Array.from(new Set(arr));
    uniqueValues.sort((a, b) => a - b);
    
    return uniqueValues;
}
let numbers = [6, 1, 6, 3, 1, 4, 3];
console.log(getUniqueValues(numbers)); 
