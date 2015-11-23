Context = {
    // An object to hold options
    options: {
        fadeIn: 100,
        fadeOut: 100,
        compress: false
    },

    initialize() {
		$(document).click(function () {
            Context.current.remove();
		});
    },

    // An object to hold menus.
    menus: {},

    // Check to see if the menu is an instance of the Menu class. Then add it to the menus object.
    addMenu(menu) {
        check(menu, Context.Menu);
        Context.menus[menu.id] = menu;
    },

    // Remove a menu based on its id
    removeMenu(id) {
        check(id, String);
        delete Context.menus[id];
    },

    attach (...menus) {
        menus = menus.slice(0,-1);
        let ret = 'javascript:';
        let index = 0;
        _.each(menus, function(menu) {
            ret += 'Context.menus.'+menu+'.show(event'+((index++ == 0) ? '' : ', true')+'); ';
        });
        ret += 'return false;';
        return { oncontextmenu: ret };
    },

    cancel (event) {
        event.stopPropagation();
    },

    // The menu to be displayed
    current: {
        // The actual menu array
        _menu: [],
        // The blaze view of the current right click menu
        _view: undefined,

        // Set a new array
        set(menu) {
            check(menu, Context.Menu);
            Context.current._menu = menu.menu.slice(0); // Shallow copy the array from the Menu
        },

        // Append the menu to the end of the current menu
        append(menu, divider = true) {
            check(menu, Context.Menu);
            if (divider) Context.current._menu.push({ divider: true });
            Context.current._menu = Context.current._menu.concat(menu.menu.slice(0)); // Shallow copy the array from the Menu
        },

        remove() {
            if (Context.current._view !== undefined) {
                // Allow other actions to carry out before removal
                Blaze.remove(Context.current._view); 
            }
        },

        // Render the current menu
        show(event) {
            Context.current.remove();
            if (event.target === document.body) return;
            let data_context = {
                left: event.pageX,
                top: event.pageY,
                menuitems: Context.current._menu,
                target: event.target
            }
            Context.current._view = Blaze.renderWithData(Template._context_menu, data_context, $('#_context_menu_container').get(0));
        }
    },

    // A class that holds all of the functions for constructing a menu
    Menu: class {
        constructor (id, options = {}) {
            check(id, String);
            // TODO: ensure id is unique
            this._id = id;
            this._menu = []; // The array which will hold the structure of the menu
            this.options = options;
            this.options.bubble = this.options.bubble || {};
            this.options.bubble.stop = this.options.bubble.stop || false;
        }

        // The text variable can be either a String or a Function
        checkText (text) {
            let pass = false;
            pass = pass || this._check(text, String);
            pass = pass || this._check(text, Function);
            return pass;
        }

        // The submenu variable can be either a String or a Function
        checkSubmenu (submenu) {
            let pass = false;
            pass = pass || this._check(submenu, String);
            pass = pass || this._check(submenu, Function);
            return pass;
        }

        // Convenience - change error to a boolean
        _check (text, type) {
            try {
                check(text, type);
            } catch(e) {
                return false;
            }
            return true;
        }

        // All of the functions below return this so that they are chainable
        addHeader (text) {
            if (!this.checkText(text)) throw new Meteor.Error('Header must be function or string');
            this.menu.push({ header: text });
            return this;
        }

        addItem (text, action = false, icon = false, subMenu = false) {
            if (!this.checkText(text)) throw new Meteor.Error('Header must be function or string');
            if (action) check(action, Function);
            if (icon) check(icon, String);
            if (subMenu) {
                if (this.checkSubmenu(subMenu)) throw new Meteor.Error('Submenu must be array of function');
            }
            this.menu.push({ text, action, icon, subMenu });
            return this;
        }

        addDivider () {
            this.menu.push({ divider: true });
            return this;
        }

        // Set or append my menu to current depending on whether I am the top level element
        show (event, append = false) {
            if (event.target === event.currentTarget && !append) {
                Context.current.set(this);
            } else {
                Context.current.append(this);
            }
            
            // Stop bubbling if the setting requires it. If so, display the menu.
            if (this.options.bubble.stop) {
                Context.cancel(event);
                Context.current.show(event);
            }
        }

        get menu    ()      { return this._menu }
        set menu    (menu)  { this._menu = menu }
        get id      ()      { return this._id   }
        set id      (id)    { this._id = id     }
        get bubbles ()      { return this._bubbles  }
        set bubbles (bub)   { this._bubbles = bub   }
    }
}

Template.registerHelper('Context', Context);

Template.body.onRendered(function() {
    Context.initialize();
});
