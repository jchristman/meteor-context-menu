test_menu = [
{
    header: 'Example'
},
{
    icon: 'glyphicon-plus',
    text: 'Create',
    action: function(e, selector) { alert('Create clicked on ' + selector.prop("tagName")); }
},
{
    icon: 'glyphicon-edit',
    text: 'Edit',
    action: function(e, selector) { alert('Edit clicked on ' + selector.prop("tagName")); }
},
{
    icon: 'glyphicon-list-alt',
    text: 'View Data As:',
    subMenu : [
    {
        text: 'Text',
        action: function(e, selector) { alert('Text clicked on ' + selector.prop("tagName")); }
    },
    {
        text: 'Image',
        subMenu: [
            {
                menu_item_src : 'exampleMenuItemSource'
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
    action: function(e, selector) { alert('Delete clicked on ' + selector.prop("tagName")); }
}
];

exampleMenuItemSource = function(selector) {
    if ($(selector).attr('id') == 'PNG_JPG') {
        return [
                {
                    text: 'PNG',
                    action: function(e, selector) { alert('Text clicked on ' + selector.prop("tagName")); }
                },
                {
                    text: 'JPG',
                    action: function(e, selector) { alert('Text clicked on ' + selector.prop("tagName")); }
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
