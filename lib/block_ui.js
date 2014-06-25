BlockUI = {
    block: function() {
        if(document.getElementById("block_ui_container")) return;
        $("body").prepend("<div id='buic'></div>");
        UI.insert(UI.render(Template["block_ui"]), $("#buic").get(0));
        Session.set("block_ui",true);
    },
    unblock: function() {
        Session.set("block_ui",false);
    }
};



Template.block_ui.helpers({
    'session': function(param) {
        return Session.get(param) || false;
    }
});
