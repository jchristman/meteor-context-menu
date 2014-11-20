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
            text: 'PNG',
            action: function(e, selector) { alert('PNG clicked on ' + selector.prop("tagName")); }
        },
        {
            text: 'JPEG',
            action: function(e, selector) { alert('JPEG clicked on ' + selector.prop("tagName")); }
        },
        {
            text: 'GIF',
            action: function(e, selector) { alert('GIF clicked on ' + selector.prop("tagName")); }
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
