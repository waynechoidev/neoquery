export default class Core {
  static selectQuery(coreThis, query) {
    if (coreThis.element != null) {
      throw new Error("already selected");
    }

    const newElement = document.querySelectorAll(query);
    if (newElement.length > 0) {
      coreThis.element = newElement;
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
    coreThis.element = [parse(html)];
    return coreThis;
  }
}
