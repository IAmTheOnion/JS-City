class man {
    constructor(x, y, face) {
        this.x = x;
        this.y = y;
        this.face = face;
    }
}

class club {
    constructor(x, y, face) {
        this.x = x;
        this.y = y;
        this.face = face;
    }
}


let guy = new man(1, 1, "😀");
let c = new club(10, 10, "🌃");


let g = new Array(12);

for (let i = 0; i < 12; i++) {
    g[i] = new Array(12);
}

const place = document.getElementById("container");

setInterval(ref(), 1000);

function ref() {

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            g[i][j] = "🟫";
        }
    }

    g[guy.x][guy.y] = guy.face;
    g[c.x][c.y] = c.face;

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            place.innerHTML += g[i][j];
        }
        place.innerHTML += "<br>";
    }
}
