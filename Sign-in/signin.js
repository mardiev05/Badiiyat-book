let form = document.querySelector("#form");
let url = "https://bookzon.herokuapp.com/api/";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);

    let login = {
        email: e.target[0].value,
        password: e.target[1].value,
    };
    console.log(login);

    (async() => {
        let res = await fetch(url + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
        });
        let data = await res.json();
        console.log(data);

        if (data.success) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "You have successfully registered",
                footer: '<a href="">Why do I have this issue?</a>',
            });
            window.location.assign(
                "http://127.0.0.1:5501/Home-page/home.html?search="
            );
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: data.msg,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    })();
});