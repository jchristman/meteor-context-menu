// Hook into the body template to add animations
Template._context_menu_container.animations({
    '.dropdown-menu': {
        container: '#_context_menu_container',
        animateInitial: false,
        animateInitialStep: 0,
        animateInitialDelay: 0,
        insert: {
            class: "animated fast fadeIn"
        },
        remove: {
            class: "animated fast fadeOut"
        }
    }
});
