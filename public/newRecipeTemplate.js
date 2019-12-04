(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['newRecipe'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"recipe-preview-container\" data-cook-time=\""
    + alias4(((helper = (helper = helpers["cook-time"] || (depth0 != null ? depth0["cook-time"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cook-time","hash":{},"data":data,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":67}}}) : helper)))
    + "\" data-people-served=\""
    + alias4(((helper = (helper = helpers["people-served"] || (depth0 != null ? depth0["people-served"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"people-served","hash":{},"data":data,"loc":{"start":{"line":1,"column":89},"end":{"line":1,"column":106}}}) : helper)))
    + "\" data-difficulty=\""
    + alias4(((helper = (helper = helpers.difficulty || (depth0 != null ? depth0.difficulty : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"difficulty","hash":{},"data":data,"loc":{"start":{"line":1,"column":125},"end":{"line":1,"column":139}}}) : helper)))
    + "\" data-spice=\""
    + alias4(((helper = (helper = helpers.spice || (depth0 != null ? depth0.spice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"spice","hash":{},"data":data,"loc":{"start":{"line":1,"column":153},"end":{"line":1,"column":162}}}) : helper)))
    + "\" data-ingredients=\""
    + alias4(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data,"loc":{"start":{"line":1,"column":182},"end":{"line":1,"column":197}}}) : helper)))
    + "\" data-directions=\""
    + alias4(((helper = (helper = helpers.directions || (depth0 != null ? depth0.directions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"directions","hash":{},"data":data,"loc":{"start":{"line":1,"column":216},"end":{"line":1,"column":230}}}) : helper)))
    + "\" data-author=\""
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":1,"column":245},"end":{"line":1,"column":255}}}) : helper)))
    + "\" data-meal=\""
    + alias4(((helper = (helper = helpers.meal || (depth0 != null ? depth0.meal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meal","hash":{},"data":data,"loc":{"start":{"line":1,"column":268},"end":{"line":1,"column":276}}}) : helper)))
    + "\">\r\n            <div class=\"recipe-preview-image-container\">\r\n              <img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":3,"column":24},"end":{"line":3,"column":31}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":38},"end":{"line":3,"column":47}}}) : helper)))
    + "\">\r\n            </div>\r\n            <h3><a href=\"#\" class=\"recipe-preview-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":57},"end":{"line":5,"column":66}}}) : helper)))
    + "</a></h3>\r\n            <span class=\"preview-data-author\">Created by: "
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":6,"column":58},"end":{"line":6,"column":68}}}) : helper)))
    + "</span>\r\n            <h2 class=\"preview-edit-recipe-text\">Edit Recipe</h2>\r\n            <input class=\"preview-edit-checkbox\" type=\"checkbox\" name=\"edit-recipe\" value=\"edit\">\r\n        </div>";
},"useData":true});
})();