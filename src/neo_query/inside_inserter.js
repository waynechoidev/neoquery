import { parse } from "../lib.js";

export default class InsideInserter {
  static append(coreThis, html) {
    coreThis.element.forEach((node) => {
      node.appendChild(parse(html));
    });
    return coreThis;
  }

  static prepend(coreThis, html) {
    coreThis.element.forEach((node) => {
      node.insertBefore(parse(html), node.firstChild);
    });
    return coreThis;
  }

  static appendTo(coreThis, selector) {
    const target = document.querySelectorAll(selector);
    const newElement = [...coreThis.element];

    coreThis.element.forEach((node) => {
      target[0].appendChild(node);
    });

    for (let i = 1; i < target.length; i++) {
      coreThis.element.forEach((node) => {
        const clone = node.cloneNode(true);
        target[i].appendChild(clone);
        newElement.push(clone);
      });
    }
    coreThis.element = newElement;
    return coreThis;
  }

  static prependTo(coreThis, selector) {
    const target = document.querySelectorAll(selector);
    const newElement = [...coreThis.element];

    coreThis.element.forEach((node) => {
      target[0].insertBefore(node, target[0].firstChild);
    });

    for (let i = 1; i < target.length; i++) {
      coreThis.element.forEach((node) => {
        const clone = node.cloneNode(true);
        target[i].insertBefore(clone, target[i].firstChild);
        newElement.push(clone);
      });
    }
    coreThis.element = newElement;
    return coreThis;
  }
}
