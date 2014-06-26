var BlockUIFactory = function() {
    var blockUIDep = new Deps.Dependency;
    var spinnerStyle = "background:#1DB8F5";
    var spinnerTemplate = "block_ui_spinner_flipping_rectangle";

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

    this.configure = function(options) {
        if(this.setSpinnerStyle) this.setSpinnerStyle(options.spinnerStyle);
        if(options.spinnerTemplate) this.setSpinnerTemplate("block_ui_spinner_"+options.spinnerTemplate);

    };
    this.block = function() {
        if(document.getElementById("block_ui_container")) return;
        UI.insert(UI.render(Template["block_ui"]), document.body);
        Session.set("block_ui",true);
    };
    this.unblock = function() {
        Session.set("block_ui",false);
    };
    return this;
};

BlockUI = new BlockUIFactory();
