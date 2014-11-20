test_menu = [
{
    header: 'Example'
},
{
    icon: 'glyphicon-plus',
    text: 'Create',
    action: function(e) { alert('Create clicked'); console.log(e); }
},
{
    icon: 'glyphicon-edit',
    text: 'Edit',
    action: function(e) { alert('Edit clicked on ' + this.innerHTML); }
},
{
    icon: 'glyphicon-list-alt',
    text: 'View Data As:',
    subMenu : [
    {
        text: 'Text',
        action: function(e) { alert('Text clicked on ' + this.innerHTML); }
    },
    {
        text: 'Image',
        subMenu: [
        {
            text: 'PNG',
            action: function(e) { alert('PNG clicked on ' + this.innerHTML); }
        },
        {
            text: 'JPEG',
            action: function(e) { alert('JPEG clicked on ' + this.innerHTML); }
        },
        {
            text: 'GIF',
            action: function(e) { alert('GIF clicked on ' + this.innerHTML); }
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
    action: function(e) { alert('Delete clicked on ' + this.innerHTML); }
}
];
