var BlockUIFactory = function() {
    var blockUIDep = new Deps.Dependency,
        should_block = false,
        spinnerStyle = "background:#1DB8F5",
        spinnerTemplate = "block_ui_spinner_flipping_rectangle";

    this.getSpinnerStyle = function() {
        blockUIDep.depend();
        return spinnerStyle;
    };
    this.setSpinnerStyle = function(style) {
        spinnerStyle = style;
        blockUIDep.changed();
    };
    this.getSpinnerTemplate = function() {
        blockUIDep.depend();
        return spinnerTemplate;
    };
    this.setSpinnerTemplate = function(template) {
        spinnerTemplate = template;
        blockUIDep.changed();
    };
    this.shouldBlock = function() {
        blockUIDep.depend();
        return should_block;
    };

    this.configure = function(options) {
        if(options.spinnerStyle) this.setSpinnerStyle(options.spinnerStyle);
        if(options.spinnerTemplate) this.setSpinnerTemplate(options.spinnerTemplate);
    };
    this.block = function() {
        if(document.getElementById("block_ui_container")) return;
        UI.insert(UI.render(Template["block_ui"]), document.body);
        blockUIDep.changed();
        should_block = true;

        //blocking the keyboard input
        $("input, button, textarea").blur();
        $("input, button, textarea").on("focus.block_ui_event", function() {
            $("input, button, textarea").blur();
            return false;
        });
    };
    this.unblock = function() {
        if(!document.getElementById("block_ui_container")) return;

        //this should be removed when bug in Blaze (which don't remove template when node is removed with jquery) gets fixed
        var rmExtraElsInterval = Meteor.setInterval(function() {
            var els = $(".block_ui_container");
            if (els.length > 1)
                els.each(function(index, el) {
                    // if(index !== 0) el.remove();
                    if(index !== 0) el.$ui.removeAll();
                });
            if (els.length > 0) Meteor.clearInterval(rmExtraElsInterval);
        }, 100);


        blockUIDep.changed();
        should_block = false;
        //unblock the keyboard input
        $("input, button, textarea").off("focus.block_ui_event");
    };

    return this;
};

BlockUI = new BlockUIFactory();
