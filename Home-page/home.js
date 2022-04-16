let url = "https://bookzon.herokuapp.com/api/";

(async() => {
    let response = await fetch(url + "books");
    let data = await response.json();
    console.log(data);
})();