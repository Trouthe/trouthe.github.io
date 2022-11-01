// const pg = document.createElement('span');
// pg.innerHTML = `
//     <p>This is an added paragraph</p>
// `;

const pg = document.createElement("span");
pg.textContent = "";

const cons = document.getElementById("console");
const button = document.getElementById("addAboutMe");

button?.addEventListener('click', function handleClick (event) {
    cons?.append(pg, "This is a new paragraph");
});