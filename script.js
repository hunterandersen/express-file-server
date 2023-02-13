const myDiv = document.querySelector("div.thing");

fetch("http://localhost:3000/")
.then((res) => {
    console.log(res.body);
    return res.text();
})
.then((res) => {
    console.log(res);

    myDiv.innerHTML = res;
})