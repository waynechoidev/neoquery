import Starter from "./starter.js";
import InsideInserter from "./inside_inserter.js";
import OutsideInserter from "./outside_inserter.js";
import Replacer from "./replacer.js";
import Remover from "./remover.js";
import AttributerEditor from "./attribute_editor.js";
import Traverser from "./traverser.js";

export default class NeoQuery {
  constructor() {
    /*NodeList.prototype.push = function (element) {
      NodeList[1] = "1";
      console.log(element);
    };*/
    this.element;
    //return this in all methods
    //to create fluent interface
    //for method chaining like "jQuery"
  }

  // $() the starter function
  selectQuery(query) {
    return Starter.selectQuery(this, query);
  }
  createHTML(html) {
    return Starter.createHTML(this, html);
  }

  // DOM Manipulation
  // Insertion, inside
  append(html) {
    return InsideInserter.append(this, html);
  }
  appendTo(selector) {
    return InsideInserter.appendTo(this, selector);
  }
  prepend(html) {
    return InsideInserter.prepend(this, html);
  }
  prependTo(selector) {
    return InsideInserter.prependTo(this, selector);
  }

  // Insertion, outside
  after(html) {
    return OutsideInserter.after(this, html);
  }
  before(html) {
    return OutsideInserter.before(this, html);
  }
  clone() {
    return OutsideInserter.clone(this);
  }

  // Replacer
  replaceAll(selector) {
    return Replacer.replaceAll(this, selector);
  }
  replaceInside(html) {
    return Replacer.replaceInside(this, html);
  }
  replaceWith(html) {
    return Replacer.replaceWith(this, html);
  }

  // Remover
  empty() {
    return Remover.empty(this);
  }
  remove(selector) {
    return Remover.remove(this, selector);
  }
  removeAll() {
    return Remover.removeAll(this);
    //finish chaining method
  }

  // Attribute Manipulation
  addClass(className) {
    return AttributerEditor.addClass(this, className);
  }
  removeClass(className) {
    return AttributerEditor.removeClass(this, className);
  }
  addAttr(attributeName, value) {
    return AttributerEditor.addAttr(this, attributeName, value);
  }
  removeAttr(attributeName) {
    return AttributerEditor.removeAttr(this, attributeName);
  }
  addProp(propertyName, value) {
    return AttributerEditor.addProp(this, propertyName, value);
  }
  removeProp(propertyName) {
    return AttributerEditor.removeProp(this, propertyName);
  }

  // Traversing
  children() {
    return Traverser.children(this);
  }
  find(selector) {
    return Traverser.find(this, selector);
  }
  parent() {
    return Traverser.parent(this);
  }
  next() {
    return Traverser.next(this);
  }
  prev() {
    return Traverser.prev(this);
  }
  eq(number) {
    return Traverser.eq(this, number);
  }

  attr() {
    let attributeList = [];
    this.element.forEach((node) => {
      attributeList.push(node.getAttribute(attributeName));
    });
    return attributeList.join();
    //finish chaining method
  }

  prop() {
    let propertyList = [];
    this.element.forEach((node) => {
      propertyList.push(node[propertyName]);
    });
    return propertyList.join();
    //finish chaining method
  }

  text() {
    let valueList = [];
    this.element.forEach((node) => {
      valueList.push(node.textContent);
    });
    return valueList.join();
    //finish chaining method
  }

  html(html) {
    if (!html) {
      let result = "";
      this.element.forEach((node) => {
        result = result + node.outerHTML;
      });
      return result;
      //finish chaining method
    }
    for (let i = 0; i < this.element.length; i++) {
      this.element.forEach((node) => (node.innerHTML = html));
    }
    return this;
  }
  //traversing

  //event

  //style

  //dimension

  //inspection
}
