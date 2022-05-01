let url = "https://bookzon.herokuapp.com/api";
// let url = "http://localhost:8000/api";




(async() => {
    let response = await fetch(url + "/authors");
    let data = await response.json();
    console.log(data.payload);

    data.payload.forEach((item) => {

        var aTag = `<a href="http://127.0.0.1:5501/Main/main.html?id=${item._id}">${item.firstName + " " + item.lastName}</a>`;

        let card = `
            <div class="card">
                <img src="../images/avloniy.png" alt="">
                <div class="card_content">
                    <p class="card__text">${aTag}<br>
                        <span>${new Date(item.date_of_birth).getFullYear()} - ${new Date(item.date_of_death).getFullYear()}</span>
                    </p>
                    <div class="icons">
                        <div class="folder">
                            <i class="fa-solid fa-folder-open"></i>77
                        </div>
                        <div class="headphone">
                            <i class="fa-solid fa-headphones-simple"></i>77
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.querySelector(".row").innerHTML += card;
    });
})();





const bar = document.querySelector(".bar")
document.querySelector("#profile__img").addEventListener("click", () => {
    bar.classList.toggle("hide");
});

const logOut = document.querySelector("#logout");

logOut.addEventListener("click", () => {
    localStorage.clear()
})