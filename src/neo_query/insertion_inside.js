import { parse } from "./lib.js";

export default class InsertionInside {
  static append(coreThis, html) {
    if (coreThis.element) {
      coreThis.element.forEach((node) => {
        node.appendChild(parse(html));
      });
    }
    return coreThis;
  }

  static appendTo(coreThis, selector) {
    const target = document.querySelectorAll(selector);
    const nodeList = Array.from(coreThis.element);
    nodeList.forEach((node) => {
      target[0].appendChild(node);
    });
    for (let i = 1; i < target.length; i++) {
      nodeList.forEach((node) => {
        const clone = node.cloneNode(true);
        target[i].appendChild(clone);
        nodeList.push(clone);
      });
    }
    coreThis.element = nodeList;
    return coreThis;
  }

  static prepend(coreThis, html) {
    if (coreThis.element) {
      coreThis.element.forEach((node) => {
        node.insertBefore(parse(html), node.firstChild);
      });
    }
    return coreThis;
  }

  static prependTo(coreThis, selector) {
    const target = document.querySelectorAll(selector);
    const nodeList = Array.from(coreThis.element);
    nodeList.forEach((node) => {
      target[0].insertBefore(node, target[0].firstChild);
    });
    for (let i = 1; i < target.length; i++) {
      nodeList.forEach((node) => {
        const clone = node.cloneNode(true);
        target[i].insertBefore(clone, target[i].firstChild);
        nodeList.push(clone);
      });
    }
    coreThis.element = nodeList;
    return coreThis;
  }
}
