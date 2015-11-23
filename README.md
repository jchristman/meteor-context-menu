meteor-context-menu
=============================

Context menus the meteor way. Define the menus programatically and then attach them in a simple way. See the [live example](http://contextmenu.meteor.com/).

Installation
============

meteor add jchristman:context-menu

Version 2.0
===========

This version breaks compatability with old version - you will need to rewrite code that uses it.

Features
========

* Chainable, programatic construction syntax
* Convenient attaching method
* Combined menus if right click bubbles to elements deeper in the page
* Smart detection of context direction (will drop 'up' if the menu would go off the bottom of the page and drop 'left' if it would go off right side of page)
* Ability to attach multiple menus to the same element and automatically combine them
* Ecmascript 6 classes and coding

Defining the menu
=================

Define the menu programatically using the Context.Menu class and chained function calls, and then add it to the library namespace in order to use it. First, create a new Context.Menu using the following syntax:

```js
let test = new Context.Menu('test'); // The string passed to the constructor is its ID. It must be unique and will be used to attach the menu to your elements.
```

Next build the menu. There are three functions on the Context.Menu class that you should use:

```js
menu.addHeader(header)
menu.addItem(text, action, icon, subMenu)
menu.addDivider()
```

These three functions each return the menu object and are chainable, making construction of a menu easy. See below:

```js
let exampleMenu5 = (new Context.Menu('example5'))
    .addHeader('Example 5')
    .addItem('9', function (context, element) { alert('9 clicked on ' + context.target.id) })
```

The arguments for the three functions are of the types shown below:

* addHeader
    * header
        * String
* addItem
    * text
        * String or Function
            * If a function, the context of the overall menu is passed to the function, which includes the target that was right clicked in the context. This allows you to generate dynamic content in the menu based on what was right clicked.
    * action
        * Function
            * There are two arguments passed to the action function - the context of the menu and the element that was selected. The context of the menu includes the target that was right clicked.
    * icon
        * String
            * Should be a glyphicon name
    * subMenu
        * An array of submenu items. Can be easily built by building a new Context.Menu and passing its .menu field as the argument here. See the example below.
* addDivider (no arguments)

Last, add the menu to the Context namespace. Like so:

```js
Context.addMenu(exampleMenu5);
```

Attaching the context menu
========================

It is very easy to attach the context menu to your element. In the template, simply do:

```html
<li class='someClass' {{Context.attach 'example1' 'optionalExample2' 'optionalHoweverManyYouWant'}}></li>
```

Context.attach will take any number of menus and will generate the appropriate HTML code for your element. The naming is important - the strings that you pass to Context.attach **must** be the same as the string you pass to the Context.Menu constructor.
