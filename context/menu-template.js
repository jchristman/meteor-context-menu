//TODO: function for subMenu

// offsets for positioning the right click menus
var OFFSET_TOP = 10,
    OFFSET_LEFT = -17,
    OFFSET_TOP_UP = -30,
    OFFSET_LEFT_LEFT = 31;

Template.registerHelper('_context_menu_itemType', 
    function () {
        if (this.header !== undefined) return "_context_menu_header";
        if (this.divider !== undefined) return "_context_menu_divider";
        return "_context_menu_item";
    }
);

Template._context_menu.onCreated(function() {
    // These variables allow the position of the menu to change reactively (no DOM manipulations)
    this._dropdown_left = new ReactiveVar(false);
    this._dropdown_up = new ReactiveVar(false);
    this._offset_top = new ReactiveVar(0);
    this._offset_left = new ReactiveVar(0);
});

Template._context_menu.onRendered(function() {
    // Reposition the menu if it is going to go offscreen
    // TODO: if it goes offscreen in both directions, default to the one that shows more and add a scrollbar?
    let menu = $(this.find('.dropdown-root')),
        menuHeight = menu.height(),
        menuTop = menu.offset().top,
        collision = (menuHeight+menuTop) > window.innerHeight;
   
    if (collision) { 
        this._dropdown_up.set(collision);
        this._offset_top.set(-menuHeight + OFFSET_TOP_UP);
    }
    
    let menuWidth = menu.width(),
        menuLeft = menu.offset().left;
    collision = (menuWidth+menuLeft) > window.innerWidth;
   
    if (collision) { 
        this._dropdown_left.set(collision);
        this._offset_left.set(-menuWidth + OFFSET_LEFT_LEFT);
    }
});

Template._context_menu.helpers({
    root() {
        return _.extend(this, { root: Template.parentData(1) });
    },

    getTop() {
        return this.top + Template.instance()._offset_top.get() + OFFSET_TOP;
    },

    getLeft() {
        return this.left + Template.instance()._offset_left.get() + OFFSET_LEFT;
    },

    upOrLeft() {
        let ret = '';
        ret += Template.instance()._dropdown_left.get() ? ' dropdown-context-left' : '';
        ret += Template.instance()._dropdown_up.get() ? ' dropdown-context-up' : '';
        return ret;
    }
});

Template._context_menu_item.helpers({
    isDropdown() {
        return (this.subMenu !== false) ? "dropdown-submenu" : undefined;
    },

    getText() {
        if (typeof this.text === 'function') {
            return this.text(this.root);
        }
        return this.text;
    }
});

Template._context_menu_item.events({
    'click a': function(event) {
        if (this.action !== false) {
            event.stopPropagation(); // Stop anything else from getting a click underneath the element
            let a = $(event.currentTarget);
            let root = a.closest('.dropdown-root').get(0);
            let root_context = Blaze.getData(root);
            this.action(root_context, root);
            Context.current.remove(); // Retire the menu
        }
    },

    'mouseenter .dropdown-submenu': function(event) {
        // TODO: Fix this to be a reactive feature instead of modifying the DOM
        let $sub = $(event.currentTarget).find('.dropdown-context-sub:first');
            subWidth = $sub.width(),
            subLeft = $sub.offset().left,
            collision = (subWidth+subLeft) > window.innerWidth;
        if(collision){
            $sub.addClass('drop-left');
        }
    }
});

Template._context_menu_submenu.helpers({
    root() {
        return _.extend(this, { root: Template.parentData(1).root });
    }
});

