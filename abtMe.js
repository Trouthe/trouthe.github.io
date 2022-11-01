var cons = document.getElementById("console");
var button = document.getElementById("addAboutMe");
var langs = new Array("--  Angular.js", "--  TypeScript", "--  JS", "--  php", "--  React.js", "🤯");
var i = 0;
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    var pg = document.createElement("p");
    var pg2 = document.createElement("p");
    pg.textContent = "A passionate Computer Science🚀student eager to grow and learn along the way 💪🏻";
    pg2.textContent = "Currently learning the following: ";
    cons === null || cons === void 0 ? void 0 : cons.append(pg);
    setTimeout(function () {
        cons === null || cons === void 0 ? void 0 : cons.appendChild(pg2);
        setTimeout(function () {
            languages();
        }, 750);
    }, 1000);
});
function languages() {
    var lng = document.createElement("p");
    if (i < langs.length) {
        lng.textContent = langs[i];
        cons === null || cons === void 0 ? void 0 : cons.appendChild(lng);
        i++;
        setTimeout(languages, 750);
    }
}
