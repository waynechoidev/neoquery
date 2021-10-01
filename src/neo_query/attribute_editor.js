export default class AttributerEditor {
  static addClass(coreThis, className) {
    coreThis.element.forEach((node) => {
      node.classList.add(className);
    });
    return coreThis;
  }

  static removeClass(coreThis, className) {
    coreThis.element.forEach((node) => {
      node.classList.remove(className);
    });
    return coreThis;
  }

  static addAttr(coreThis, attributeName, value) {
    coreThis.element.forEach((node) => {
      node.setAttribute(attributeName, value);
    });
    return coreThis;
  }

  static removeAttr(coreThis, attributeName) {
    coreThis.element.forEach((node) => {
      node.removeAttribute(attributeName);
    });
    return coreThis;
  }

  static addProp(coreThis, propertyName, value) {
    coreThis.element.forEach((node) => {
      node[propertyName] = value;
    });
    return coreThis;
  }
  static removeProp(coreThis, propertyName) {
    coreThis.element.forEach((node) => {
      delete node[propertyName];
    });
    return coreThis;
  }
}
