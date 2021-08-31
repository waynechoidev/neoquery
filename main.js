export default function $(query, isHTML) {
  //isHTML = optional argument

  if (typeof query === "function") {
    return document.addEventListener("DOMContentLoaded", query, { once: true });
  }
  const neoQuery = new NeoQuery();
  if (!isHTML) {
    return neoQuery.selectQuery(query);
  } else {
    return neoQuery.createHTML(query);
  }
}

function parse(html) {
  const parent = document.createElement("div");
  parent.innerHTML = html.trim();
  return parent.firstChild;
}

class NeoQuery {
  constructor() {
    this.element = undefined;
    //return this in all methods
    //to create fluent interface
    //for method chaining like "jQuery"
  }

  //constructor
  selectQuery(query) {
    if (this.element != null) {
      throw new Error("already selected");
    }
    const newElement = document.querySelectorAll(query);
    if (newElement.length > 0) {
      this.element = newElement;
    } else {
      throw new Error(
        `there is not elements with the selector "${query}", or it is wrong selector. `
      );
    }
    return this;
  }

  createHTML(html) {
    if (this.element != null) {
      throw new Error("already selected");
    }
    this.element = [parse(html)];
    return this;
  }

  //manipulation
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

  after(html) {
    const newNode = parse(html);
    this.element.forEach((node) => {
      node.parentNode.insertBefore(newNode.cloneNode("deep"), node.nextSibling);
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

  before(html) {
    const newNode = parse(html);
    this.element.forEach((node) => {
      node.parentNode.insertBefore(newNode.cloneNode("deep"), node);
    });
    return this;
  }

  clone() {
    this.element.forEach((node) => {
      node.parentNode.insertBefore(node.cloneNode("deep"), node.nextSibling);
    });
    return this;
  }

  empty() {
    this.element.forEach((node) => {
      node.innerHTML = "";
    });
    return this;
  }

  append(html) {
    if (this.element) {
      this.element.forEach((node) => {
        node.appendChild(parse(html));
      });
    }
    return this;
  }

  appendTo(query) {
    const nodeList = document.querySelectorAll(query);
    if (nodeList.length === 1) {
      this.element.forEach((node) => {
        nodeList[0].appendChild(node);
      });
    } else {
      throw new Error("Number of target node must be 1.");
    }
    return this;
  }

  prepend(html) {
    if (this.element) {
      this.element.forEach((node) => {
        node.insertBefore(parse(html), node.firstChild);
      });
    }
    return this;
  }

  prependTo(query) {
    const nodeList = document.querySelectorAll(query);
    if (nodeList.length === 1) {
      this.element.forEach((node) => {
        nodeList[0].insertBefore(node, nodeList[0].firstChild);
      });
    } else {
      throw new Error("Number of target node must be 1.");
    }
    return this;
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

  remove(query) {
    if (!query) {
      this.element.forEach((node) => {
        node.remove();
      });
      this.element = undefined;
      return this;
      //finish chaining method
    } else {
      this.element.forEach((parentNode) => {
        parentNode.querySelectorAll(query).forEach((node) => {
          node.remove();
        });
      });
    }
    return this;
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
