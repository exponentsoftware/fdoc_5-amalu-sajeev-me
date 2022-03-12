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
