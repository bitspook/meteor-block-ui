Template.block_ui.helpers({
    'shouldBlock': function() {
        return BlockUI.shouldBlock();
    },
    'block_ui_spinner': function() {
        return Template[BlockUI.getSpinnerTemplate()];
    },
    'spinner_style': function() {
        return BlockUI.getSpinnerStyle();
    }
});

Template.block_ui_spinner_flipping_rectangle.helpers({
    'spinner_style': function() {
        return BlockUI.getSpinnerStyle();
    }
});

Template.block_ui_spinner_twin_circles.helpers({
    'spinner_style': function() {
        return BlockUI.getSpinnerStyle();
    }
});
