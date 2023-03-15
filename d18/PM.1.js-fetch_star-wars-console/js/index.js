console.clear();
console.log("index.js initialized 🏠");

const url = "https://swapi.dev/api/people";

const root = document.getElementById("root");

const fetchData = async () => {
  try {
    const response = await fetch(url);
    console.log("Fetched data from", url);
    const JSONData = await response.json();
    console.log(JSONData);
    const r2d2 = JSONData.results.find((char) => char.name === "R2-D2");
    console.log(r2d2.eye_color);
  } catch {
    console.log("Something went wrong :(");
  }
};

fetchData();
