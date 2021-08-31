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
    const nodeList = document.querySelectorAll(selector);
    if (nodeList.length === 1) {
      coreThis.element.forEach((node) => {
        nodeList[0].appendChild(node);
      });
    } else {
      throw new Error("Number of target node must be 1.");
    }
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
    const nodeList = document.querySelectorAll(selector);
    if (nodeList.length === 1) {
      coreThis.element.forEach((node) => {
        nodeList[0].insertBefore(node, nodeList[0].firstChild);
      });
    } else {
      throw new Error("Number of target node must be 1.");
    }
    return coreThis;
  }
}
