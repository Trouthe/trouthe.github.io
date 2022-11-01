const cons = document.getElementById("console");
const button = document.getElementById("addAboutMe");

var langs = new Array ("--  Angular.js", "--  TypeScript", "--  JS", "--  php", "--  React.js", "🤯");

var i = 0;

button?.addEventListener('click', function handleClick (event) {
    const pg = document.createElement("p");
    const pg2 = document.createElement("p");

    pg.textContent = "A passionate Computer Science🚀student eager to grow and learn along the way 💪🏻";
    pg2.textContent = "Currently learning the following: ";

    cons?.append(pg);

    setTimeout(() => {
        cons?.appendChild(pg2);

        setTimeout(() => {
            languages();
        }, 750);
    }, 1000);
});

function languages () {
    const lng = document.createElement("p");

    if (i < langs.length) {
        lng.textContent = langs[i];

        cons?.appendChild(lng);

        i++;
        setTimeout(languages, 750);
    }
}