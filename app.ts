

const cons = document.getElementById("console");
const button = document.getElementById("addAboutMe");

button?.addEventListener('click', function handleClick (event) {
    const pg = document.createElement("p");
    pg.textContent = "This is a new paragraph";
    cons?.appendChild(pg);
});