const url = "https://bookzon.herokuapp.com/api";

let author = {
    firstName: "William",
    lastName: "Shekspare",
    date_of_birth: "2021-07-13T14:23:25.696Z",
    date_of_death: "2021-07-13T14:23:25.696Z",
    createdAt: "2021-07-13T14:23:25.696Z",
    updatedAt: "2021-07-13T14:23:25.696Z",
    user: "userId",
};

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
        user: user._id,
    };

    (async() => {
        let res = await fetch(url + "/authors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer : " + localStorage.getItem("token"),
            },
            body: JSON.stringify(authors),
        });
        let data = await res.json();
        console.log(data);
    })();
});