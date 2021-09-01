import { parse } from "./lib.js";

export default class InsertionOutside {
  static after(coreThis, html) {
    const newNode = parse(html);
    coreThis.element.forEach((node) => {
      node.parentNode.insertBefore(newNode.cloneNode(true), node.nextSibling);
    });
    return coreThis;
  }
  static before(coreThis, html) {
    const newNode = parse(html);
    coreThis.element.forEach((node) => {
      node.parentNode.insertBefore(newNode.cloneNode(true), node);
    });
    return coreThis;
  }

  static clone(coreThis) {
    coreThis.element.forEach((node) => {
      node.parentNode.insertBefore(node.cloneNode(true), node.nextSibling);
    });
    return coreThis;
  }
}
