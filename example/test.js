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
