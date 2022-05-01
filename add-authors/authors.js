const url = "https://bookzon.herokuapp.com/api";
// const url = "http://localhost:8000/api";

let form = document.querySelector("#form");
let user = JSON.parse(localStorage.getItem("user"));
console.log(user);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let authors = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        date_of_birth: e.target.date_of_birth.value,
        date_of_death: e.target.date_of_death.value,
        description: e.target.description.value,
    };
    (async() => {
        let res = await fetch(url + "/authors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(authors),
        });
        let data = await res.json();
        console.log(data);
        if (data.success) {
            e.target.reset()
        }
    })();
    window.location.assign("http://127.0.0.1:5501/Home-page/home.html");

});