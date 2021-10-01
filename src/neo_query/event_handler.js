export default class EventHandler {
  static on(coreThis, event, handler) {
    coreThis.element.forEach((node) => {
      node.addEventListener(event, handler);
    });
    return coreThis;
  }

  static one(coreThis, event, handler) {
    coreThis.element.forEach((node) => {
      node.addEventListener(event, handler, { once: true });
    });
    return coreThis;
  }

  static off(coreThis, event) {
    coreThis.element.forEach((node) => {
      node.removeEventListener(event);
    });
    return coreThis;
  }
}
