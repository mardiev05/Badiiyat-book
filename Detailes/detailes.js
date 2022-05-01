let url = "https://bookzon.herokuapp.com/api";
// const url = "http://localhost:8000/api";
let bookId = window.location.search.slice(4);






(async() => {
    let res = await fetch(url + "/books/" + bookId + "");
    let data = await res.json();

    let item = data.payload.book;
    console.log(item);


    let content = document.querySelector(".content");
    let card = `
          <div class="main__title-container">
                        <h1 class="main__title">${item.title}</h1>
                        <p class="main__title-name">${item?.author?.firstName + " " + item?.author?.lastName}<i class="fa-solid fa-star"> 4.1</i></p>
                    </div>

                    <ul class="main__ul-container">
                        <li>Sahifalar soni: <span>${item.pages}</span></li>
                        <li>Chop etilgan: <span>${item.year}</span></li>
                        <li>Kitob Narxi: <span>$${item.price}</span></li>
                        <li>Country: <span>${item.country}</span></li>
                    </ul>

                    <div class="main__description">
                        <div class="main__description-title">
                            <h2>To’liq ma’lumot</h2>
                            <i class="fa-solid fa-down-long"></i>
                            <div class="main__description-line"></div>
                        </div>
                        <p class="main__description-text">
                            ${item.description}
                        </p>
                    </div>
    `;
    content.innerHTML = card

})();














const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
        if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            let res = await fetch(url + "/books/" + bookId + "", {
                method: "DELETE",
                headers: {
                    "Content-Type": "Aplication/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            let data = await res.json();
        }
    });
});