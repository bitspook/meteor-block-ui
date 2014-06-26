Template.block_ui.helpers({
    'session': function(param) {
        return Session.get(param) || false;
    },
    'block_ui_spinner': function() {
        return Template[BlockUI.getSpinnerTemplate()];
    }
});

Template.block_ui_spinner_flipping_rectangle.helpers({
    'spinner_style': function() {
        return BlockUI.getSpinnerStyle();
    }
});
