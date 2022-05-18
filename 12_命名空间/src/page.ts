// console.log("Hello TypeScript!");

namespace Home {
  class Content {
    constructor() {
      const el = document.createElement("div");
      el.innerHTML = "Content";
      document.body.appendChild(el);
    }
  }

  export class Page {
    constructor() {
      new Content();
    }
  }
}
