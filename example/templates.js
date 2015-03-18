if (Meteor.isClient) {
    Template.PNG_JPG.helpers({
        contextOne: function() {
            return {example : 'context number one'};
        }
    });

    Template.NO_OPTIONS.helpers({
        contextTwo: function() {
            return {example : 'context number two'};
        }
    });
    
    Template.notDynamic.helpers({
        contextThree: function() {
            return {example : 'context number three'};
        }
    });
}
