const url = "http://localhost:8000/api";

(async() => {
    let res = await fetch(url + "/books");
    let data = await res.json();

    let book = data.payload.docs;

    let row = document.querySelector(".row");
    book.map(item => {
        console.log(item)
        let card = `
            <div class="card">
                    <img src="../images/avloniy.png" alt="">
                    <div class="card_content">
                        <p class="card__text">${item.title}
                            <br>
                            <span>${
                              item.author.firstName + " " + item.author.lastName
                            }</span>
                        </p>
                        <div class="icons">
                            <div class="folder">
                                <p class="star__text">${new Date(item.author.date_of_birth).getFullYear() + "-" + new Date(item.author.date_of_death).getFullYear()}</p>
                            </div>
                            <p class="country">${item.country}</p>
                        </div>
                    </div>
                </div>
        `;
        row.innerHTML += card;
    })
})()