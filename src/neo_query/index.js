import { parse } from "./lib.js";
import Core from "./core.js";
import InsertionInside from "./insertion_inside.js";
import InsertionOutside from "./insertion_outside.js";
import Replacement from "./replacement.js";
import Removal from "./removal.js";

export default class NeoQuery {
  constructor() {
    this.element;
    //return this in all methods
    //to create fluent interface
    //for method chaining like "jQuery"
  }

  // $() the core function
  selectQuery(query) {
    return Core.selectQuery(this, query);
  }
  createHTML(html) {
    return Core.createHTML(this, html);
  }

  // DOM Manipulation
  // Insertion, inside
  append(html) {
    return InsertionInside.append(this, html);
  }
  appendTo(selector) {
    return InsertionInside.appendTo(this, selector);
  }
  prepend(html) {
    return InsertionInside.prepend(this, html);
  }
  prependTo(selector) {
    return InsertionInside.prependTo(this, selector);
  }

  // Insertion, outside
  after(html) {
    return InsertionOutside.after(this, html);
  }
  before(html) {
    return InsertionOutside.before(this, html);
  }
  clone() {
    return InsertionOutside.clone(this);
  }

  // Replacement

  // Removal
  empty() {
    return Removal.empty(this);
  }
  remove(selector) {
    return Removal.remove(this, selector);
  }
  removeAll() {
    return Removal.removeAll(this);
    //finish chaining method
  }

  addClass() {
    let argumentList = [];
    for (let i = 0; i < arguments.length; i++) {
      argumentList.push(arguments[i]);
    }
    this.element.forEach((node) => {
      argumentList.map((argument) => {
        node.classList.add(argument);
      });
    });
    return this;
  }

  attr(attributeName, value) {
    if (!value) {
      let attributeList = [];
      this.element.forEach((node) => {
        attributeList.push(node.getAttribute(attributeName));
      });
      return attributeList.join();
      //finish chaining method
    } else {
      this.element.forEach((node) => {
        node.setAttribute(attributeName, value);
      });
      return this;
    }
  }

  prop(propertyName, value) {
    if (!value) {
      let propertyList = [];
      this.element.forEach((node) => {
        propertyList.push(node[propertyName]);
      });
      return propertyList.join();
      //finish chaining method
    } else {
      this.element.forEach((node) => {
        node[propertyName] = value;
      });
      return this;
    }
  }

  removeAttr(attributeName) {
    this.element.forEach((node) => {
      node.removeAttribute(attributeName);
    });
    return this;
  }

  removeClass(className) {
    this.element.forEach((node) => {
      node.classList.remove(className);
    });
    return this;
  }

  removeProp(propertyName) {
    this.element.forEach((node) => {
      delete node[propertyName];
    });
    return this;
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
  //html은 인스펙션 용으로만 쓰고, replaceAll, replaceWith, replaceInside로 바꾸기.

  now() {
    return this.element;
  } //이건 1,2,3, all 아규먼트 받기.노드 혹은 리스트 아규먼트 없으면 0.

  //traversing

  //event

  //style

  //dimension

  //inspection
}
