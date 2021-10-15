# NeoQuery APIs

## Table of Contents

- [Core](#Core)
- [DOM insertion, inside](#DOM-insertion,-inside)
- [DOM insertion, outside](#DOM-insertion,-outside)
- [Replace](#Replace)
- [Remove](#Remove)
- [Attribute Manipulation](#Attribute-Manipulation)
- [Traversing](#Traversing)
- [Event](#Event)

## Core

1. Accepts a string containing a CSS selector which is then used to match a set of elements.

```js
$(selector);
selector: Selector;

$("div.foo").addClass("bar");
```

2. Creates DOM elements on the fly from the provided string of raw HTML.

```js
$(html, isHTML);
html: htmlString;
isHTML: Boolean;

$("<p id='test'>My <em>new</em> text</p>", true).appendTo("body");
```

3. Binds a function to be executed when the DOM has finished loading.

```js
$(callback);
callback: Function;

$(function () {
  // Document is ready
});
```

## DOM insertion, inside

### append(html)

Insert content, specified by the parameter, to the end of each element in the set of matched elements.

    html: htmlString

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$(".inner").append("<p>Test</p>");
```

```html
<div class="container">
  <div class="inner">
    Hello
    <p>Test</p>
  </div>
  <div class="inner">
    Goodbye
    <p>Test</p>
  </div>
</div>
```

### appendTo(selector)

Insert every element in the set of matched elements to the end of the target.

    selector: Selector

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$("<p>Test</p>").appendTo(".inner");
```

```html
<div class="container">
  <div class="inner">
    Hello
    <p>Test</p>
  </div>
  <div class="inner">
    Goodbye
    <p>Test</p>
  </div>
</div>
```

### prepend(html)

Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

    html: htmlString

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$(".inner").prepend("<p>Test</p>");
```

```html
<div class="container">
  <div class="inner">
    <p>Test</p>
    Hello
  </div>
  <div class="inner">
    <p>Test</p>
    Goodbye
  </div>
</div>
```

### prependTo(selector)

Insert every element in the set of matched elements to the beginning of the target.

    selector: Selector

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$("<p>Test</p>").prependTo(".inner");
```

```html
<div class="container">
  <div class="inner">
    <p>Test</p>
    Hello
  </div>
  <div class="inner">
    <p>Test</p>
    Goodbye
  </div>
</div>
```

## DOM insertion, outside

### after(html)

Insert content, specified by the parameter, after each element in the set of matched elements.

    html: htmlString

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$(".inner").after("<p>Test</p>");
```

```html
<div class="container">
  <div class="inner">Hello</div>
  <p>Test</p>
  <div class="inner">Goodbye</div>
  <p>Test</p>
</div>
```

### before(html)

Insert content, specified by the parameter, before each element in the set of matched elements.

    html: htmlString

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$(".inner").before("<p>Test</p>");
```

```html
<div class="container">
  <p>Test</p>
  <div class="inner">Hello</div>
  <p>Test</p>
  <div class="inner">Goodbye</div>
</div>
```

### clone()

Create a deep copy of the set of matched elements.

```html
<div class="container">
  <div class="target">Test</div>
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$(".target").clone().appendTo(".inner");
```

```html
<div class="container">
  <div class="target">Test</div>
  <div class="inner">
    Hello
    <div class="target">Test</div>
  </div>
  <div class="inner">
    Goodbye
    <div class="target">Test</div>
  </div>
</div>
```

## Replace

### replaceAll(selector)

Replace each target element with the set of matched elements.

    selector: Selector

```html
<div class="test">Test</div>
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$(".test").replaceAll(".inner");
```

```html
<div class="test">Test</div>
<div class="container">
  <div class="test">Test</div>
  <div class="test">Test</div>
</div>
```

### replaceInside(html)

Replace inside of matched elements with the parameter.

    html: htmlString

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$(".inner").replaceInside("<p>Test</p>");
```

```html
<div class="container">
  <div class="test"><p>Test</p></div>
  <div class="test"><p>Test</p></div>
</div>
```

### replaceWith(html)

Replace matched elements with the parameter.

    html: htmlString

```html
<div class="container">
  <div class="inner">Hello</div>
  <div class="inner">Goodbye</div>
</div>
```

```js
$(".inner").replaceInside("<p>Test</p>");
```

```html
<div class="container">
  <p>Test</p>
  <p>Test</p>
</div>
```

## Remove

### empty()

Remove all child nodes of the set of matched elements from the DOM.

```html
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">Goodbye</div>
</div>
```

```js
$(".hello").empty();
```

```html
<div class="container">
  <div class="hello"></div>
  <div class="goodbye">Goodbye</div>
</div>
```

### remove(selector)

Remove the target elements in the set of matched elements from the DOM.

    selector: Selector

```html
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">Goodbye</div>
</div>
```

```js
$("div").remove(".hello");
```

```html
<div class="container">
  <div class="goodbye">Goodbye</div>
</div>
```

### removeAll()

Remove the set of matched elements from the DOM.

```html
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">Goodbye</div>
</div>
```

```js
$(".hello").removeAll();
```

```html
<div class="container">
  <div class="goodbye">Goodbye</div>
</div>
```

## Attribute Manipulation

### addClass(className)

Add the specified class to each element in the set of matched elements.

    className: String

```js
$("p").addClass("myClass");
```

### removeClass(className)

    className: String

Remove the specified class to each element in the set of matched elements.

```js
$("p").removeClass("myClass");
```

### addAttr(attributeName, value)

Set an attribute for the set of matched elements.

    attributeName: String
    value: any

```js
$("img").addAttr("title", "my title");
```

### removeAttr(attributeName)

Remove the specified attribute to each element in the set of matched elements.

    attributeName: String

```js
$("img").removeAttr("title");
```

### addProp(propertyName, value)

Set a property for the set of matched elements.

    propertyName: String
    value: any

```js
$("img").addProp("luggageCode", 1234);
```

### removeProp(propertyName)

Remove the specified properties to each element in the set of matched elements.

    propertyName: String

```js
$("img").removeProp("luggageCode");
```

## Traversing

Get the children of each element in the set of matched elements.

```html
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">
    <li></li>
    <li></li>
    <li></li>
  </div>
</div>
```

```js
$(.goodbye).children().append("<p>Test</p>");
```

```html
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">
    <li><p>Test</p></li>
    <li><p>Test</p></li>
    <li><p>Test</p></li>
  </div>
</div>
```

### find(selector)

    selector: Selector

Get the children of each element in the set of matched elements filtered by a selector.

```html
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">
    <li id="target"></li>
    <li></li>
    <li></li>
  </div>
</div>
```

```js
$(.goodbye).children("#target").append("<p>Test</p>");
```

```html
<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">
    <li id="target"><p>Test</p></li>
    <li></li>
    <li></li>
  </div>
</div>
```

### parent()

Get the parent of each element in the current set of matched elements, optionally filtered by a selector.

```js
$("p").parent();
```

### eq(number)

Reduce the set of matched elements to the one at the specified index.

```html
<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
</ul>
```

```js
$("li").eq(2).append("<p>Test</p>");
```

```html
<ul>
  <li>list item 1</li>
  <li>
    list item 2
    <p>Test</p>
  </li>
  <li>list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
</ul>
```

## Event Handling

### on(event, handler)

Attach an event handler function for one or more events to the selected elements

    event: Event
    handler: Function

```js
$("div.test").on("click", function () {
  console.log($(this).text());
});
```

### one (event, handler)

Attach a handler to an event for the elements. The handler is executed at most once per element per event type.

    event: Event
    handler: Function

### off(event, handler)

Remove an event handler.

    event: Event
    handler: Function
