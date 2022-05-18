"use strict";
// console.log("Hello TypeScript!");
var Home;
(function (Home) {
    class Content {
        constructor() {
            const el = document.createElement("div");
            el.innerHTML = "Content";
            document.body.appendChild(el);
        }
    }
    class Page {
        constructor() {
            new Content();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
