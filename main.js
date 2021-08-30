export default function $(query, isHTML) {
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
  }

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

  append(html) {
    if (this.element) {
      Array.from(this.element).map((node) => {
        node.appendChild(parse(html));
      });
    }
    return this;
  }
  appendTo(query) {
    const nodeList = document.querySelectorAll(query);
    if (nodeList.length === 1) {
      nodeList[0].appendChild(this.element[0]);
    } else {
      Array.from(nodeList).map((node) => {
        node.appendChild(this.element.cloneNode("deep"));
      });
    }
    return this;
  }

  html(html) {
    for (let i = 0; i < this.element.length; i++) {
      this.element[i].innerHTML = html;
    }
    return this;
  }
}
