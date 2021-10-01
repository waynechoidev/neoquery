import Starter from "./starter.js";
import InsideInserter from "./inside_inserter.js";
import OutsideInserter from "./outside_inserter.js";
import Replacer from "./replacer.js";
import Remover from "./remover.js";
import AttributerEditor from "./attribute_editor.js";
import Traverser from "./traverser.js";
import EventHandler from "./event_handler.js";

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
  eq(number) {
    return Traverser.eq(this, number);
  }

  // Event handling
  on(event, handler) {
    return EventHandler.on(this, event, handler);
  }
  one(event, handler) {
    return EventHandler.one(this, event, handler);
  }
  off(event) {
    return EventHandler.one(this, event);
  }
}
