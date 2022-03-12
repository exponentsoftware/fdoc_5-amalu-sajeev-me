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
