var dynamicMenu = 'context-menu-dynamic';
var cancelClose = false;

(function ($, window) {

    $.fn.contextMenu = function (settings) {

        return this.each(function () {

            // Open context menu
            $(this).on("contextmenu", function (e) {
                if (settings.hasOwnProperty('menuObject')) {
                    var menu = settings.menuObject;
                    if ($('#' + dynamicMenu).length == 0) {
                        child = $(createMenuHTML(dynamicMenu, menu)).appendTo('body');
                        settings.menuSelector = child;
                    } else {
                        settings.menuSelector = $('#' + dynamicMenu);
                    }
                }
                
                //open menu
                $(settings.menuSelector)
                    .data("invokedOn", $(e.target))
                    .show()
                    .css({
                        position: "absolute",
                        left: getLeftLocation(e),
                        top: getTopLocation(e)
                    })
                    .off('click')
                    .on('click', function (e) {
                        var $invokedOn = $(this).data("invokedOn");
                        var $selectedItem = $(e.target);

                        if ($selectedItem.closest('li').hasClass('dropdown-submenu')) {
                            cancelClose = true;
                            return;
                        }
                        
                        if ($(this).attr('id') != dynamicMenu) {
                            $(this).hide();
                        }
                        
                        settings.menuSelected.call(this, $invokedOn, $selectedItem);
                        
                        if ($(this).attr('id') == dynamicMenu) {
                            $(this).remove();
                        }
                    });
                
                return false;
            });

            //make sure menu closes on any click
            $(document).click(function () {
                if (cancelClose) {
                    cancelClose = false;
                    return;
                }
                    
                var menu = $(settings.menuSelector);
                if (menu.attr('id') == dynamicMenu) {
                    menu.remove();
                } else {
                    menu.hide();
                }
            });
        });

        function getLeftLocation(e) {
            var mouseWidth = e.pageX;
            var pageWidth = $(window).width();
            var menuWidth = $(settings.menuSelector).width();
            
            // opening menu would pass the side of the page
            if (mouseWidth + menuWidth > pageWidth &&
                menuWidth < mouseWidth) {
                return mouseWidth - menuWidth;
            } 
            return mouseWidth;
        }        
        
        function getTopLocation(e) {
            var mouseHeight = e.pageY;
            var pageHeight = $(window).height();
            var menuHeight = $(settings.menuSelector).height();

            // opening menu would pass the bottom of the page
            if (mouseHeight + menuHeight > pageHeight &&
                menuHeight < mouseHeight) {
                return mouseHeight - menuHeight;
            } 
            return mouseHeight;
        }

    };
})(jQuery, window);

var createMenuHTML = function(dropdownID, menuObject) {
    var html = '<ul';
    if (dropdownID != '')
        html += ' id="' + dropdownID + '" class="dropdown-menu" role="menu" style="display:none">';
    else
        html += ' class="dropdown-menu">';
    $(menuObject).each(function(index, item) {
        if (item.hasOwnProperty('name')) {
            if (item.hasOwnProperty('subMenu')) {
                html += '<li class="dropdown-submenu">';
                html += '<a id="subMenuItem" tabindex="-1" href="#">'
                if (item.hasOwnProperty('icon')) 
                    html += '<span class="glyphicon ' + item.icon + '"></span> ';
                html += item.title;
                html += '</a>';
                html += createMenuHTML('', item.subMenu);
                html += '</li>';
            } else {
                html += '<li><a id="' + item.name + '" tabindex="-1" href="#">';
                if (item.hasOwnProperty('icon')) 
                    html += '<span class="glyphicon ' + item.icon + '"></span> ';
                html +=  item.title;
                html += '</a></li>';
            }
        } else {
            html += '<li class="divider"></li>';
        }
    });
    html += '</ul>';
    return html;
}
