import { parse } from "../lib.js";

export default class Starter {
  static selectQuery(coreThis, query) {
    if (coreThis.element != null) {
      throw new Error("already selected");
    }

    const newElement = document.querySelectorAll(query);
    if (newElement.length > 0) {
      coreThis.element = Array.from(newElement);
    } else {
      throw new Error(
        `there is not elements with the selector "${query}", or it is wrong selector. `
      );
    }
    return coreThis;
  }

  static createHTML(coreThis, html) {
    if (coreThis.element != null) {
      throw new Error("already selected");
    }
    coreThis.element = new Array(parse(html));
    return coreThis;
  }
}
