if (Meteor.isClient) {
    Meteor.startup(function() {
        var exampleMenu1 = (new Context.Menu('example1'))
            .addHeader('Example 1')
            .addItem('1', function (context, element) { alert('1 clicked on ' + context.target.id) })
            .addItem('2', function (context, element) { alert('2 clicked on ' + context.target.id) })
            .addDivider()
            .addItem('Nested', undefined, 'glyphicon glyphicon-list-alt', 
                (new Context.Menu('Example 1 Submenu 1'))
                    .addItem('3', function (context, element) { alert('3 clicked on ' + context.target.id) })
                    .addItem('4', function (context, element) { alert('4 clicked on ' + context.target.id) })
                    .menu
            );

        var dynamicMenuFunction = function(context) {
            if (context.target.id === 'example2')
                return 'Example 2 Dynamic Menu Item';
            if (context.target.id === 'example3')
                return 'Example 3 Dynamic Menu Item';
            if (context.target.id === 'example4')
                return 'Example 3 Dynamic Menu Item in the Example 4 box';
        }

        var exampleMenu2 = (new Context.Menu('example2'))
            .addHeader('Example 2')
            .addItem(
                dynamicMenuFunction,
                function (context, element) { 
                    alert('Dynamic menu item clicked on ' + context.target.id) 
                })
            .addItem('5', function (context, element) { alert('5 clicked on ' + context.target.id) })

        var exampleMenu3 = (new Context.Menu('example3', { bubble: { stop: true }}))
            .addHeader('Example 3')
            .addItem(
                dynamicMenuFunction,
                function (context, element) { 
                    alert('Dynamic menu item clicked on ' + context.target.id) 
                })
            .addItem('6', function (context, element) { alert('6 clicked on ' + context.target.id) })

        var exampleMenu4 = (new Context.Menu('example4'))
            .addHeader('Example 4')
            .addItem('7', function (context, element) { alert('7 clicked on ' + context.target.id) })
            .addItem('8', function (context, element) { alert('8 clicked on ' + context.target.id) })

        var exampleMenu5 = (new Context.Menu('example5'))
            .addHeader('Example 5')
            .addItem('9', function (context, element) { alert('9 clicked on ' + context.target.id) })

        Context.addMenu(exampleMenu1);
        Context.addMenu(exampleMenu2);
        Context.addMenu(exampleMenu3);
        Context.addMenu(exampleMenu4);
        Context.addMenu(exampleMenu5);
    })
} 
