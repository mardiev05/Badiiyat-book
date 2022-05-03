let url = "https://bookzon.herokuapp.com/api";


let searchValue = localStorage.getItem("search");
console.log(searchValue);

(async() => {
    let res = await fetch(url + "/books/search?title=" + searchValue + "");
    let data = await res.json();
    console.log(data);
    const row = document.querySelector(".row");
    data.payload.map((item) => {
        let card = `
            <div class="card">
                    <div class="card__img-container">
                        <div class="img__card">
                            <img src="../images/o'tkir.png" alt="">
                        </div>
                    </div>
                    <div class="card__info-row">
                        <h3 class="card__title">${item?.title}</h3>
                        <p class="card__text">${item?.description}</p>
                        <h5 class="name">
                            <span class="name__first">${item?.author?.firstName}</span>
                            <span class="name__last">${item?.author?.lastName}</span>
                        </h5>
                        <p class="card__birth">
                            <span>${new Date(item?.author?.date_of_birth).getFullYear() + " - " + new Date(item?.author?.date_of_death).getFullYear()}</span>
                        </p>
                    </div>

                </div>
        `;
        row.innerHTML += card;
    })

})();