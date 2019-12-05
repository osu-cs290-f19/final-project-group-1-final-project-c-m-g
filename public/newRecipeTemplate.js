(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['newRecipe'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"recipe-preview-container\" data-cook-time=\""
    + alias4(((helper = (helper = helpers.cookTime || (depth0 != null ? depth0.cookTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cookTime","hash":{},"data":data,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":66}}}) : helper)))
    + "\" data-people-served=\""
    + alias4(((helper = (helper = helpers.peopleServed || (depth0 != null ? depth0.peopleServed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"peopleServed","hash":{},"data":data,"loc":{"start":{"line":1,"column":88},"end":{"line":1,"column":104}}}) : helper)))
    + "\" data-difficulty=\""
    + alias4(((helper = (helper = helpers.difficulty || (depth0 != null ? depth0.difficulty : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"difficulty","hash":{},"data":data,"loc":{"start":{"line":1,"column":123},"end":{"line":1,"column":137}}}) : helper)))
    + "\" data-spice=\""
    + alias4(((helper = (helper = helpers.spice || (depth0 != null ? depth0.spice : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"spice","hash":{},"data":data,"loc":{"start":{"line":1,"column":151},"end":{"line":1,"column":160}}}) : helper)))
    + "\" data-ingredients=\""
    + alias4(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data,"loc":{"start":{"line":1,"column":180},"end":{"line":1,"column":195}}}) : helper)))
    + "\" data-directions=\""
    + alias4(((helper = (helper = helpers.directions || (depth0 != null ? depth0.directions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"directions","hash":{},"data":data,"loc":{"start":{"line":1,"column":214},"end":{"line":1,"column":228}}}) : helper)))
    + "\" data-author=\""
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":1,"column":243},"end":{"line":1,"column":253}}}) : helper)))
    + "\" data-meal=\""
    + alias4(((helper = (helper = helpers.meal || (depth0 != null ? depth0.meal : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"meal","hash":{},"data":data,"loc":{"start":{"line":1,"column":266},"end":{"line":1,"column":274}}}) : helper)))
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