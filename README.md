meteor-bootstrap-context-menu
=============================

This library is a meteor translation of the http://lab.jakiestfu.com/contextjs/ library, with some modifications made for convenience and for special features.

Installation
============

meteor add jchristman:context-menu

Recent Additions
================

I just add automatic capturing of the Blaze context of the right-clicked item. It is now passed as a third argument to the "action" function defined in the data structure definition of the right-click menu. See the [example](https://github.com/jchristman/meteor-bootstrap-context-menu/tree/master/example) for a more complete example and the [live demo](http://contextmenu.meteor.com).

Defining the menu
=================

Define the menu as an object: this is a natural way of expressing the context menu. You can define an object with roughly this structure:

```js
test_menu = {
    id: 'TEST-MENU',
    data: [
        {
            header: 'Example'
        },
        {
            icon: 'glyphicon-plus',
            text: 'Create',
            action: function(e, selector, context) { alert('Create clicked on ' + selector.prop("tagName")); }
        },
        {
            icon: 'glyphicon-edit',
            text: 'Edit',
            action: function(e, selector, context) { alert('Edit clicked on ' + selector.prop("tagName")); }
        },
        {
            icon: 'glyphicon-list-alt',
            text: 'View Data As:',
            subMenu : [
            {
                text: 'Text',
                action: function(e, selector, context) { alert('Text clicked on ' + selector.prop("tagName")); }
            },
            {
                text: 'Image',
                subMenu: [
                    {
                        menu_item_src : exampleMenuItemSource // This function will get two arguments: the selector and the blaze context of the clicked element.
                    }
                ]
            }
            ]
        },
        {
            divider: true
        },
        {
            header: 'Another Example'
        },
        {
            icon: 'glyphicon-trash',
            text: 'Delete',
            action: function(e, selector, context) { alert('Delete clicked on ' + selector.prop("tagName")); }
        }
    ]
};
```

```js
test_menu2 = [
    {
        header: 'Example'
    },
    {
        icon: 'glyphicon-plus',
        text: 'Create',
        action: function(e, selector, context) { alert('Create clicked on ' + selector.prop("tagName")); }
    },
    {
        icon: 'glyphicon-edit',
        text: 'Edit',
        action: function(e, selector, context) { alert('Edit clicked on ' + selector.prop("tagName")); }
    }
];
```

There are several important features here. The "text" field will be the text displayed in the menu for that item. The "icon" field *requires* a glyphicon from bootstrap - you just need to tell it which glyphicon you want. Last, you can define an arbitrary depth menu by adding the subMenu field.

Binding the context menu
========================

A very simple example of this is shown.

```js
context.attach('body', test_menu);
```

In this, we see that it is defining a context menu for the body element. This can be replaced with any jquery selectable element and it will work. 

Other Options
=============

For other options, see the documentation at http://lab.jakiestfu.com/contextjs/. There is very little different about this library.
