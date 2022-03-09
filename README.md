## DAY 5
1. Use the countries API to fetch data about countries. (5 pt)

      ```js
      const API_URL = 'https://restcountries.com/v3/all'
      ```

    - How many languages are there in the countries API
    - Find the 15 most spoken languages

    ```sh
    [
    {language: "English", countries: 91}
    {language: "French", countries: 45}
    {language: "Arabic", countries: 25}
    {language: "Spanish", countries: 24}
    {language: "Portuguese", countries: 9}
    {language: "Russian", countries: 9}
    {language: "Dutch", countries: 8}
    {language: "German", countries: 7}
    {language: "Chinese", countries: 5}
    {language: "Serbian", countries: 4}
    {language: "Swahili", countries: 4}
    {language: "Italian", countries: 4}
    {language: "Swedish", countries: 3}
    {language: "Albanian", countries: 3}
    {language: "Croatian", countries: 3}
    ]
    ```

    - Find the 10 most largest countries

    ```sh
    [
    {country: "Russian Federation", area: 17124442}
    {country: "Antarctica", area: 14000000}
    {country: "Canada", area: 9984670}
    {country: "China", area: 9640011}
    {country: "United States of America", area: 9629091}
    {country: "Brazil", area: 8515767}
    {country: "Australia", area: 7692024}
    {country: "India", area: 3287590}
    {country: "Argentina", area: 2780400}
    {country: "Kazakhstan", area: 2724900}
    ]
    ```

2. Explain the following questions in your own words

What is the difference between forEach, map, filter and reduce ? Explain these using your own words
Explain the difference between function declaration and arrow function ?
Explain the difference between find and findIndex ?
If you like to filter out one object element in an array which method do you like to use: filter or find ? Explain
Explain the difference of var, let and const when we declare a variable ?
