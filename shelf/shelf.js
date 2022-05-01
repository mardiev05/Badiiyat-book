let url = "https://bookzon.herokuapp.com/api";
// const url = "http://localhost:8000/api";

(async() => {
    let res = await fetch(url + "/books");
    let data = await res.json();

    let book = data.payload.docs;
    console.log(book);

    let row = document.querySelector(".row");
    book.forEach((item) => {
        console.log(item);
        let aTag = `<a href="http://127.0.0.1:5501/Detailes/detailes.html?id=${item._id}">${item.title}</a>`;
        let card = `
            <div class="card" onclick=(getDetailes(${item._id}))>
                    <img src="../images/avloniy.png" alt="">
                    <div class="card_content">
                        <p class="card__text">${aTag}
                            <br>
                            <span> ${
                              item.author?.firstName +
                              " " +
                              item.author?.lastName
                            } </span>
                        </p>
                        <div class="icons">
                            <div class="folder">
                                <p class="star__text">
                                    ${
                                      new Date(
                                        item.author?.date_of_birth
                                      ).getFullYear() +
                                      "-" +
                                      new Date(
                                        item.author?.date_of_death
                                      ).getFullYear()
                                    }
                                </p>
                            </div>
                            <p class="country">${item?.country}</p>
                        </div>
                    </div>
                </div>
        `;
        row.innerHTML += card;
    });
})();

document.querySelector("#profile__img").addEventListener("click", () => {
    window.location.assign("http://127.0.0.1:5501/Sign-in/signin.html");
});