"use strict";

const api_key = "2a3c21f7203959050cb73bdefd2b2ae2";
const imageBaseURL = "http://image.tmdb.org/t/p/";

/*--------- 
Fetch data from a server using the 'url' and passes the result in JSON data to a 'callback' function, 
along with an optional parameter if has 'optionalParam'.
----------*/

const fetchDataFromServer = function (url, callback, optionalParam, language = "es-ES") {
  // Añadir el parámetro de idioma a la URL
  const languageParam = `&language=${language}`;
  const fetchUrl = url + languageParam;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam))
    .catch((error) => console.error("Error fetching data:", error));
};

export { imageBaseURL, api_key, fetchDataFromServer };