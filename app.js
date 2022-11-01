// const pg = document.createElement('span');
// pg.innerHTML = `
//     <p>This is an added paragraph</p>
// `;
var cons = document.getElementById("console");
var button = document.getElementById("addAboutMe");
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    var pg = document.createElement("p");
    pg.textContent = "This is a new paragraph";
    cons === null || cons === void 0 ? void 0 : cons.appendChild(pg);
});
