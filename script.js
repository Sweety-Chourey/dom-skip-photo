let boxes = document.querySelectorAll(".box");
let img = document.querySelector(".img");

boxes.forEach((elem) => {
    elem.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    elem.addEventListener("drop", (event) => {
        event.preventDefault();
        elem.appendChild(img);
    });
});
