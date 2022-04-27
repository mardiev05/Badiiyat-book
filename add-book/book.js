const url = "http://localhost:8000/api";



const form = document.querySelector("#form");


(async() => {
    let res = await fetch(url + "/authors");
    let data = await res.json();
    console.log(data);
    let select = document.querySelector("#author");

    for (let item of data.payload) {
        let option = `
            <option value="${item._id}">${item.firstName + " " + item.lastName}</option>
        `
        select.innerHTML += option;
    }
})();

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let target = e.target;

    let book = {
        title: target.title.value,
        pages: target.pages.value,
        year: target.year.value,
        price: target.price.value,
        country: target.country.value,
        author: target.author.value,
        description: target.description.value,
    }
    console.log(book);

    (async() => {
        let res = await fetch(url + "/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Baerer " + localStorage.getItem("token")
            },
            body: JSON.stringify(book),
        });
        let data = await res.json();
        console.log(data)
        if (data.success) {
            e.target.reset()
        }
    })();
})