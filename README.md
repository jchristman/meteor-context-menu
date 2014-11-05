meteor-bootstrap-context-menu
=============================

This library was made because there was not a decent bootstrap library out there for right click contexts, so I wrote my own. It is loosely based on several other libraries that exist, leaning heavily on syntax from https://github.com/s-yadav/contextMenu.js.

Installation
============

meteor add jchristman:context-menu

Defining the menu
=================

There are two ways to define a menu.

1. Define the menu as an object: this is the preferred way of doing it and is actually why I wrote this instead of using another library. You can define an object with roughly this structure:

```
test_menu = [
    {
        name: 'create',
        icon: 'glyphicon-plus',
        title: 'Create',
    },
    {
        name: 'edit',
        icon: 'glyphicon-edit',
        title: 'Edit'
    },
    {
        name: 'viewas',
        icon: 'glyphicon-list-alt',
        title: 'View Data As:',
        subMenu : [
            {
                name: 'viewas-text',
                title: 'Text'
            },
            {
                name: 'viewas-image',
                title: 'Image',
                subMenu: [
                    {
                        name: 'viewas-image-png',
                        title: 'PNG'
                    },
                    {
                        name: 'viewas-image-jpeg',
                        title: 'JPEG'
                    },
                    {
                        name: 'viewas-image-gif',
                        title: 'GIF'
                    }
                ]
            }
        ]
    },
    {},
    {
        name: 'delete',
        icon: 'glyphicon-trash',
        title: 'Delete'
    }
];
```

There are several important features here. First, the "name" field is what will be put in as the ID of the thing selected from the context menu, so it's important you make this unique. Second, the "title" field will be the text displayed in the menu for that item. Third, the "icon" field *requires* a glyphicon from bootstrap - you just need to tell it which glyphicon you want. Last, you can define an arbitrary depth menu by adding the subMenu field. It is important to note that the subMenu parent is *not* selectable in that it will not fire the event you define.

2. Define the menu as HTML: this is the traditional way of doing it in libraries I could find.

Binding the context menu
========================

A very simple example of this is shown.

```
$('body').contextMenu({
            menuObject: test_menu, 
            menuSelected: function(invokedOn, selectedItem) {
                alert("You selected the menu item " + selectedItem.attr('id'));
            }
        });
```

In this, we see that it is defining a context menu for the body element. This can be replaced with any jquery selectable element and it will work. You must pass an object to the contextMenu method that either contains a menuObject *or* a menuSelector. The menuObject is a reference to a javascript object and the menuSelector is a string that is the HTML ID of your HTML-defined menu. The menuSelected is a callback function that has a reference to the element that was right-clicked (invokedOn) and a reference to the menu item that was selected. Use these to set up your actions based on menu choices.
