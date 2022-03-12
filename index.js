import https from "https";

/**
 * Use the countries API to fetch data about countries. (5 pt)
 */

const API_URL = "https://restcountries.com/v3/all";

async function fetch(url) {
  const request = await https.get(url);
  const response = new Promise((resolve, reject) => {
    request.on("response", (response) => {
      let responseData = "";
      response
        .on("data", (data) => (responseData += data))
        .on("end", () => resolve(JSON.parse(responseData)));
    });
    request.on("error", (err) => reject(err));
  });
  return await response;
}

/**
 * How many languages are there in the countries API
 * Find the 15 most spoken languages

 */


 const [languages, uniqueLanguages] = await fetch(API_URL).then((data) => {
   let languages = data
     .map((elem) => {
       let arr = [];
       for (let lang in elem.languages) arr.push(lang);
       return arr;
     })
     .flat(3);
   const uniqueLanguages = new Set(languages);
   return [languages, Array.from(uniqueLanguages.values())];
 });
 console.log(uniqueLanguages.length);
 // 153

 let mostSpoken15Languages = uniqueLanguages
   .map((elem) => [
     elem,
     languages.filter((filterElem) => elem === filterElem).length,
   ])
   .sort((a, b) => b[1] - a[1])
   .splice(0, 15);

 console.log(mostSpoken15Languages);
 

/**
 * Find the 10 most largest countries
 */

const tenMostlargestCountries = await fetch(API_URL).then(data => {
  return data.map(({ name, area }) => [name.official, area])
    .sort((a, b) => b[1] - a[1])
    .splice(0, 10);
});

console.log(tenMostlargestCountries);


/**
 * Explain the following questions in your own words
 */
/*
 * What is the difference between forEach, map, filter and reduce ? 

forEach() just loop through the elements. 
It's throws away return values and always returns undefined. 
The result of this method does not give us an output .

map() loop through the elements and stores return values 
by iterating main array

filter() also loop through the elements but only returns 
the elements in the index where the callback function returns true;

reduce() takes all of the elements in an array and 
reduces them into a single value.


 * Explain these using your own words Explain the difference between 
   function declaration and arrow function ? 

Arrow functions do not have an arguments binding.
Unlike regular functions, arrow functions do not have their own this
Regular functions created using function declarations or expressions 
are constructible and callable. the arrow functions are only callable 
and not constructible.


 * Explain the difference between find and findIndex ? 

the find method returns the element value, 
but the findIndex method returns the element index.

 * If you like to filter out one object element in an array 
 * which method do you like to use: filter or find ? 

find();

 * Explain Explain the difference of var, let and const 
 * when we declare a variable ?

The scope of a var variable is functional scope. 
The scope of a let & const variable is block scope.
var can be updated and re-declared into the scope.
let can be updated but cannot be re-declared into the scope.
const cannot be updated or re-declared into the scope.
var & let can be declared without initialization. 
const cannot be declared without initialization.
var can be accessed without initialization as its default value is “undefined”.
let cannot be accessed without initialization, as it returns an error.
const cannot be accessed without initialization, 
as it cannot be declared without initialization.



 */