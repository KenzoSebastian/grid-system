const header = document.getElementsByClassName("header")[0];
const sidebar = document.getElementsByClassName("side-bar")[0];
const content = document.getElementsByClassName("content")[0];
const footer = document.getElementsByClassName("footer")[0];

header.addEventListener("click", () => {
    header.style.backgroundColor = "salmon";
});
sidebar.addEventListener("click", () => {
    sidebar.style.backgroundColor = "lightgreen";
});
content.addEventListener("click", () => {
    content.style.backgroundColor = "lightblue";
});
footer.addEventListener("click", () => {
    footer.style.backgroundColor = "purple";
});
