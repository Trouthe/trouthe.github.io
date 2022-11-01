// const pg = document.createElement('span');
// pg.innerHTML = `
//     <p>This is an added paragraph</p>
// `;
var pg = document.createElement("span");
pg.textContent = "";
var cons = document.getElementById("console");
var button = document.getElementById("addAboutMe");
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    cons === null || cons === void 0 ? void 0 : cons.append(pg, "This is a new paragraph");
});
