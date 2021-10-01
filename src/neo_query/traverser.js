export default class Traverser {
  static children(coreThis) {
    const newElement = [];
    coreThis.element.forEach((node) => {
      newElement.push(...node.children);
    });
    coreThis.element = newElement;
    return coreThis;
  }

  static find(coreThis, selector) {
    const newElement = [];
    coreThis.element.forEach((node) => {
      newElement.push(...node.querySelectorAll(selector));
    });
    coreThis.element = newElement;
    return coreThis;
  }

  static parent(coreThis) {
    const newElement = [];
    coreThis.element.forEach((node) => {
      newElement.push(node.parentNode);
    });
    coreThis.element = newElement;
    return coreThis;
  }

  static next(coreThis) {
    const newElement = [];
    coreThis.element.forEach((node) => {
      newElement.push(node.nextSibling);
    });
    coreThis.element = newElement;
    return coreThis;
  }

  static prev(coreThis) {
    const newElement = [];
    coreThis.element.forEach((node) => {
      newElement.push(node.previousSibling);
    });
    coreThis.element = newElement;
    return coreThis;
  }

  static eq(coreThis, number) {
    const newElement = [];
    let index;
    if (-coreThis.length <= number < 0) {
      console.log(-coreThis.length);
      index = coreThis.length + number;
    } else {
      index = number;
    }
    coreThis.element.forEach((node) => {
      const child = node.children[number];
      if (!child) {
        console.error("Invalid index number");
      }
      newElement.push(child);
    });

    coreThis.element = newElement;
    return coreThis;
  }
}
