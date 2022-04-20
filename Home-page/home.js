// let url = "https://bookzon.herokuapp.com/api/";
let url = "http://localhost:8000/api";

(async() => {
    let response = await fetch(url + "/authors");
    let data = await response.json();
    console.log(data);
})();