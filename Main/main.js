let url = "https://bookzon.herokuapp.com/api";
// let url = "http://localhost:8000/api";

const userId = window.location.search.slice(4);

(async() => {
    let res = await fetch(url + "/authors/" + userId + "");
    let data = await res.json()
    console.log(data.payload)

    let item = data.payload;
    const contentTitleRow = document.querySelector(".content__title-row");
    let card = `
            <h1 class="content__title">${item.firstName + " " + item.lastName}</h1>
            <p class="content__text">${item.description}</p>
    `;
    contentTitleRow.innerHTML = card;

    const imgDate = document.querySelector(".img__info-row");
    let imgDateCard = `
        <div class="img__info">
                    <div class="dateOfBirth">
                        <p class="birth__title">Tavallud sanasi</p>
                        <p class="birth">${new Date(item.date_of_birth).toDateString().slice(4)}</p>
                        <p class="birth__city">Toshkent, Uzbekistan</p>
                    </div>
                </div>
                <span class="dash"></span>
                <div class="img__info">
                    <div class="dateOfBirth">
                        <p class="birth__title">Tavallud sanasi</p>
                        <p class="birth">${new Date(item.date_of_death).toDateString().slice(4)}</p>
                        <p class="birth__city">Toshkent, Uzbekistan</p>
                    </div>
                </div>
    `;
    imgDate.innerHTML = imgDateCard;


    (async() => {
        let res = await fetch(url + "/books/author/" + userId + "", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Baerer " + localStorage.getItem("token")
            }
        });
        let data = await res.json();
        console.log(data.payload)

        data.payload.map((item) => {
            let card = `
                 <div class="creature__card">
                        <img src="../images/asarlari.png" alt="">
                        <h5 class="creature__card-title">${item?.title}</h5>
                        <p class="creature__text">${item?.author?.firstName + " " + item?.author?.lastName}</p>
                    </div>
            `;
            document.querySelector(".creature__row").innerHTML += card;

        })

    })();

})();






const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", async() => {
    let res = await fetch(url + "/authors/" + userId + "", {
        method: "DELETE",
        headers: {
            "Content-Type": "Aplication/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
    let data = await res.json();
    window.location.assign("http://127.0.0.1:5501/Home-page/home.html");
})