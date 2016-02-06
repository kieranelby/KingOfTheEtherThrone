(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/interface.nunjucks.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mood"), env.opts.autoescape);
output += "Mood\">\n<form id=\"interfaceForm\" class=\"pure-form pure-form-aligned\">\n  <fieldset>\n    <legend>Status</legend>\n    <div>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "statusText"), env.opts.autoescape);
output += "</div>\n    <div class=\"pure-control-group\">\n      <button id=\"refreshInterfaceButton\" class=\"pure-button\" onclick=\"KingOfTheEtherDapp.reloadClicked()\">Refresh</button>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>Become the Monarch</legend>\n    <div class=\"pure-control-group\">\n      <label for=\"currentClaimPriceInput\">Current Claim Price</label>\n      <input id=\"currentClaimPriceInput\" type=\"text\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentClaimPrice"), env.opts.autoescape);
output += "\" size=\"36\" readonly>\n    </div>\n    <div class=\"pure-control-group\">\n      <label for=\"yourNameInput\">Your Regal Name</label>\n      <input id=\"yourNameInput\" type=\"text\" maxlength=\"20\" size=\"20\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "yourName"), env.opts.autoescape);
output += "\">\n    </div>\n    <div class=\"pure-control-group\">\n      <label>&nbsp;</label>\n      <button type=\"submit\" id=\"claimThroneButton\" class=\"pure-button pure-button-primary\" onclick=\"KingOfTheEtherDapp.claimThroneClicked()\">Claim Throne</button>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>View Hall of Great Monarchs</legend>\n    <div class=\"pure-control-group\">\n      <label for=\"monarchNumberSelect\">Number</label>\n      <select id=\"monarchNumberSelect\" onchange=\"KingOfTheEtherDapp.selectedMonarchChanged()\">\n        <option value=\"NA\">-- Choose Monarch --</option>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "monarchNumbers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("monarchNumber", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <option value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\" ";
if(t_4 == runtime.contextOrFrameLookup(context, frame, "selectedMonarchNumber")) {
output += "selected";
;
}
output += ">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option>\n        ";
;
}
}
frame = frame.pop();
output += "\n      </select>\n    </div>\n    <div class=\"pure-control-group\">\n      <label for=\"monarchFate\">Fate</label>\n      <input id=\"monarchFate\" type=\"text\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hallMonarchFate"), env.opts.autoescape);
output += "\" readonly>\n    </div>\n    <div class=\"pure-control-group\">\n      <label for=\"monarchName\">Name</label>\n      <input id=\"monarchName\" type=\"text\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hallMonarchName"), env.opts.autoescape);
output += "\" maxlength=\"20\" size=\"20\" readonly>\n    </div>\n    <div class=\"pure-control-group\">\n      <label for=\"monarchAddress\">Address</label>\n      <input id=\"monarchAddress\" type=\"text\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hallMonarchAddress"), env.opts.autoescape);
output += "\" maxlength=\"36\" size=\"36\" readonly>\n    </div>\n    <div class=\"pure-control-group\">\n      <label for=\"monarchClaimPrice\">Claim Price Paid</label>\n      <input id=\"monarchClaimPrice\" type=\"text\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hallMonarchClaimPrice"), env.opts.autoescape);
output += "\" size=\"36\" readonly>\n    </div>\n  </fieldset>\n</form>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
