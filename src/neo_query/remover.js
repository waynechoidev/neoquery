export default class Remover {
  static empty(coreThis) {
    coreThis.element.forEach((node) => {
      node.innerHTML = "";
    });
    return coreThis;
  }

  static remove(coreThis, selector) {
    if (!selector) {
      console.error(
        "No selector for remove(). If you want to remove all matched elements, please use removeAll()."
      );
    }
    coreThis.element.forEach((parentNode) => {
      parentNode.querySelectorAll(selector).forEach((node) => {
        node.remove();
      });
    });
    return coreThis;
  }

  static removeAll(coreThis) {
    coreThis.element.forEach((node) => {
      node.remove();
    });
    coreThis.element = undefined;
    return coreThis;
    //finish chaining method
  }
}
