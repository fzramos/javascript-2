//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// const get_to_data = (key, value) => {
//     val_type = Object.prototype.toString.call(value)
//     if (val_type === '[object Object]' || val_type === '[object Array]') {
//         get_to_data(value[])
//     } else {
//         return 
//     }
// }

const display_foods = (person, outer_key = '') => {
    for (let i = 0; i < Object.keys(person).length; i++) {
        key = Object.keys(person)[i]
        // value = Object.values(person)[1]
        if (Array.isArray(person[key])) {
            inner_val_type = Object.prototype.toString.call(person[key][0])
            if (inner_val_type === "[object Object]") {
                display_foods(person[key][0], key)
            } else {
            person[key].forEach(food => {
                console.log(`${key}: ${food}`);
            })}
        // } else if (inner_val_type === '[object Object]'){
        //     for 
        }
        else {
            if (outer_key != ''){
            console.log(`${outer_key}: ${key}: ${person[key]}`);
            } else {
                console.log(`${key}: ${person[key]}`)
            }
        }
    }
}

display_foods(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (years = 1) => {
        this.age += years;
    }
}

person1 = new Person('Jackie', 23)
person2 = new Person('Gabe', 19)
person1.printInfo()
person2.printInfo()
// Adding to the age 
person2.addAge()
person2.addAge()
person2.addAge()
person2.printInfo()

// or could do
person1.addAge(3)
person1.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const str_len = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length > 10) {
            resolve('Big Word')
        } else {
            resolve('Small Number')
        }
    })
}
ex1 = 'baby'
ex2 = 'emotionality'
str_len(ex2).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error)
})


// ============== CodeWars #1 ============= //
// Redoing one of my completed Py
/*
    Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
    For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
    Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
    strnum = num.toString();
    new_str = '';
    for (let c of strnum) {
      new_str += c ** 2;
    }
    return Number(new_str);
    
}

console.log(squareDigits(9119)) // 811181


// ============== CodeWars #2 ============= //
// Redoing one of my completed Py
/*
    Given two integers a and b, which can be positive or negative, find the
     sum of all the numbers between including them too and return it. If the
     two numbers are equal return a or b.
    Note: a and b are not ordered!
*/
function getSum( a,b )
{
  let min = Math.min(...[a, b])
  let max = Math.max(...[a, b])
  sum = 0
  
  for (min; min <= max; min++) {
    sum += min
  }
  return sum  
}

getSum(0,-1) //-1


// ============== CodeWars #3 ============= //
// New JS Problem
/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive
 alphabetic characters and numeric digits that occur more than once in the 
 input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text){
    count = 0;
    for (let c of text){
      regex = new RegExp(`${c}`,'gi');
      if ((text.match(regex) || []).length >= 2) {
        count ++;
        text = text.replace(regex, '');
      }
    }
    return count;
  }

  duplicateCount('aabccddddef') // returns 3