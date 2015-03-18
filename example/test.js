exampleMenuItemSource = function (selector, context) {
    console.log("Selector:",selector);
    console.log("Blaze context:",context);
    if ($(selector).attr('id') == 'PNG_JPG') {
        return [
                {
                    header: 'Example Dynamic'
                },
                {
                    text: 'PNG',
                    action: function(e, selector, context) { alert('PNG clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
                },
                {
                    text: 'JPG',
                    action: function(e, selector, context) { alert('JPG clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
                },
                {   divider: true   },
                {
                    icon: 'glyphicon-list-alt',
                    text: 'Dynamic nested',
                    subMenu : [
                    {
                        text: 'More dynamic',
                        action: function(e, selector, context) { alert('More dynamic clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
                    },
                    {
                        text: 'And more...',
                        action: function(e, selector, context) { alert('And more... clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
                    }
                    ]
                }
            ]
    } else {
        return [
                {
                    icon: 'glyphicon-exclamation-sign',
                    text: 'No image types supported!'
                }
            ]
    }
}

test_menu = {
    id: 'TEST-MENU',
    data: [
        {
            header: 'Example'
        },
        {
            icon: 'glyphicon-plus',
            text: 'Create',
            action: function(e, selector, context) { alert('Create clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
        },
        {
            icon: 'glyphicon-edit',
            text: 'Edit',
            action: function(e, selector, context) { alert('Edit clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
        },
        {
            icon: 'glyphicon-list-alt',
            text: 'View Data As:',
            subMenu : [
            {
                text: 'Text',
                action: function(e, selector, context) { alert('Text clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
            },
            {
                text: 'Image',
                subMenu: [
                    {
                        menu_item_src : exampleMenuItemSource
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
            action: function(e, selector, context) { alert('Delete clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
        }
    ]
};

test_menu2 = [
    {
        header: 'Example'
    },
    {
        icon: 'glyphicon-plus',
        text: 'Create',
        action: function(e, selector, context) { alert('Create clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
    },
    {
        icon: 'glyphicon-edit',
        text: 'Edit',
        action: function(e, selector, context) { alert('Edit clicked on ' + selector.prop("tagName") + ":" + selector.attr("id") + '\n\nBlaze Context: ' + JSON.stringify(context)); }
    }
];
