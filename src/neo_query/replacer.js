import { parse } from "../lib.js";

export default class Replacer {
  static replaceAll(coreThis, selector) {
    const target = document.querySelectorAll(selector);
    const newElement = [...coreThis.element];

    coreThis.element.forEach((node) => {
      target[0].parentNode.insertBefore(node, target[0]);
    });

    for (let i = 1; i < target.length; i++) {
      coreThis.element.forEach((node) => {
        const clone = node.cloneNode(true);
        target[i].parentNode.insertBefore(clone, target[0]);
        newElement.push(clone);
      });
    }

    target.forEach((node) => {
      node.remove();
    });
    coreThis.element = newElement;
    return coreThis;
  }

  static replaceInside(coreThis, html) {
    coreThis.element.forEach((node) => {
      node.innerHTML = html;
    });
    return coreThis;
  }

  static replaceWith(coreThis, html) {
    const newElement = [];
    coreThis.element.forEach((node) => {
      const newNode = parse(html);
      node.parentNode.insertBefore(newNode, node);
      newElement.push(newNode);
      node.remove();
    });
    coreThis.element = newElement;
    return coreThis;
  }
}
