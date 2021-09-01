import Core from "./core.js";
import InsideInserter from "./inside_inserter.js";
import OutsideInserter from "./outside_inserter";
import Replacer from "./replacer.js";
import Remover from "./remover.js";

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
