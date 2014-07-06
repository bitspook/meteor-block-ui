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
        blockUIDep.changed();
        should_block = false;

        //unblock the keyboard input
        $("input, button, textarea").off("focus.block_ui_event");
    };

    return this;
};

BlockUI = new BlockUIFactory();
