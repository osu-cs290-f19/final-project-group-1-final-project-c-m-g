(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <!--DOM for recipe card after being clicked on and enlarged-->\r\n  <section id=\"recipe-cards\" class = \"hidden\">\r\n\r\n    <div id=\"display-screen-overlay\" class=\"hidden\"></div><!--***-->\r\n    <div id=\"recipe-cards-popped\" class = \"hidden\">\r\n    <button type=\"button-x\" id=\"display-modal-close-x\" class=\"display-modal-hide-button-x\">&times;</button>\r\n    <div id=\"pop-modal\" class = \"hidden\">\r\n\r\n      <div class=\"recipes\" data-cook-time=\"{}\" data-people-served=\"{}\" data-difficulty=\"{}\" data-spice=\"{}\" data-ingredients=\"{}\"data-directions=\"{}\"data-author=\"{}\" data-meal=\"{}\" class = \"hidden\">\r\n        <div class=\"recipe-contents\">\r\n          <div class=\"recipe-image-container\">\r\n            <img src=\"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382545039107.jpeg\" alt=\"pie\">\r\n          </div>\r\n          <!--<i class=\"fas fa-heart\"></i>\r\n          <i class=\"far fa-heart\"></i> **this one's empty-->\r\n          <div class=\"recipe-card-container\">\r\n              <h3><a href=\"#\" class=\"recipe-title\">Recipe Title**card</a></h3> \r\n              <!--testing labels-->\r\n              <label for=\"recipe-time\" class=\"labels\">Cooking Time:</label><span class=\"data-cook-time\">120 Minutes</span> \r\n              <label for=\"recipe-size\" class=\"labels\"># Servings:</label><span class=\"data-people-served\">8</span>\r\n              <label for=\"recipe-difficulty\" class=\"labels\">Difficulty:</label><span class=\"data-difficulty\"> Easy</span>\r\n              <span class=\"data-ingredients\">\r\n                <ul>\r\n                  <span class=\"data-ingredient-item\"></span><li>\r\n                      Ingredients<!--how to have variable amount of list items (ingredients) for different posts? -->\r\n                  </li></span>\r\n                </ul>\r\n            </span>\r\n            <span class=\"data-directions\">\r\n                      <p>\r\n                          Instructions<!--how to have variable amount of list items (directions) for different posts? -->\r\n                      </p>\r\n            </span>\r\n            <span class=\"data-author\">Created by: Grandma B</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n    <section id=\"add-recipe-card\" class = \"hidden\"> <!--createModal-->\r\n\r\n      <div id=\"add-screen-overlay\" class=\"hidden\"></div><!--***-->\r\n\r\n      <div id=\"add-recipe-modal\" class=\"hidden\">\r\n        <div class=\"add-modal\">\r\n\r\n         <div class=\"recipe-modal-header\">\r\n           \r\n            <h3>Add a Recipe Card to the Box</h3>\r\n            <button type=\"button-x\" id=\"modal-close-x\" class=\"modal-hide-button-x\">&times;</button>\r\n          </div> \r\n\r\n          <div class=\"recipe-modal-body\">\r\n\r\n            <div class=\"recipe-input-element\">\r\n              <label for=\"recipe-title-input\">Recipe Name</label>\r\n              <input type=\"text\" id=\"recipe-title-input\"></input>\r\n            </div>\r\n\r\n            <div class=\"recipe-input-element\">\r\n              <label for=\"recipe-photo-input\">Photo URL</label>\r\n              <input type=\"text\" id=\"recipe-photo-input\">\r\n            </div>\r\n\r\n            <div class=\"recipe-input-element\">\r\n              <label for=\"recipe-size-input\">Recipe Size (# of people)</label>\r\n              <input type=\"text\" id=\"recipe-size-input\">\r\n            </div>\r\n\r\n            <div class=\"recipe-input-element\">\r\n                <label for=\"recipe-time-input\">Total Cooking Time</label>\r\n                <input type=\"text\" id=\"recipe-time-input\">\r\n            </div>\r\n\r\n            <div class=\"recipe-input-element\">\r\n                <label for=\"recipe-author-input\">Recipe Author</label>\r\n                <input type=\"text\" id=\"recipe-author-input\">\r\n            </div>\r\n\r\n            <!-- testing added div around all fieldsets -->\r\n           <div class=\"fieldset-group\">\r\n            <div class=\"recipe-input-element\">\r\n                <fieldset id=\"recipe-difficulty-fieldset\" class=\"difficulty-fieldset\">\r\n                  <legend>Difficulty Level</legend>\r\n                  <div>\r\n                    <input type=\"radio\" name=\"difficulty-rating\" id=\"difficulty-rating-easy\" value=\"Easy Street\" checked>\r\n                    <label for=\"difficulty-rating-easy\">Easy Street</label>\r\n                  </div>\r\n                  <div>\r\n                    <input type=\"radio\" name=\"difficulty-rating\" id=\"difficulty-rating-medium\" value=\"Got Skills\">\r\n                    <label for=\"difficulty-rating-skills\">Got Skills</label>\r\n                  </div>\r\n                  <div>\r\n                    <input type=\"radio\" name=\"difficulty-rating\" id=\"difficulty-rating-chef\" value=\"Top Chef\">\r\n                    <label for=\"difficulty-rating-chef\">Top Chef</label>\r\n                  </div>\r\n                </fieldset>\r\n            </div>\r\n\r\n            <div class=\"recipe-input-element\">\r\n              <fieldset id=\"recipe-spice-fieldset\" class=\"spice-fieldset\">\r\n                <legend>Spice Level</legend>\r\n                <div>\r\n                  <input type=\"radio\" name=\"spice-rating\" id=\"spice-rating-none\" value=\"None\" checked>\r\n                  <label for=\"spice-rating-none\">None</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"spice-rating\" id=\"spice-rating-mild\" value=\"Mild\">\r\n                  <label for=\"spice-rating-mild\">Mild</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"spice-rating\" id=\"spice-rating-medium\" value=\"Medium\">\r\n                  <label for=\"spice-rating-medium\">Medium</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"spice-rating\" id=\"spice-rating-hot\" value=\"Hot\">\r\n                  <label for=\"spice-rating-hot\">Hot</label>\r\n                </div>\r\n              </fieldset>\r\n            </div>\r\n\r\n            <div class=\"recipe-input-element\">\r\n              <fieldset id=\"recipe-meal-fieldset\" class=\"meal-fieldset\">\r\n                <legend>Which Meal?</legend>\r\n                <div>\r\n                  <input type=\"radio\" name=\"meal-time\" id=\"meal-time-breakfast\" value=\"Breakfast\" checked>\r\n                  <label for=\"meal-time-breakfast\">Breakfast</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"meal-time\" id=\"meal-time-lunch\" value=\"Lunch\">\r\n                  <label for=\"meal-time-lunch\">Lunch</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"meal-time\" id=\"meal-time-dinner\" value=\"Dinner\">\r\n                  <label for=\"meal-time-dinner\">Dinner</label>\r\n                </div>\r\n              </fieldset>\r\n            </div>\r\n          </div>\r\n          <!-- end fieldset group^^^ -->\r\n\r\n            <div class=\"ingredients-input-container\">\r\n                 <!-- *********ingredients volume in number form***********-->\r\n                  <div class=\"recipe-input-element\">\r\n                      <label for=\"recipe-ingredient-input\">Ingredients</label>\r\n                      <input type=\"text\" id=\"recipe-ingredient-input\">\r\n                  </div>\r\n            </div>\r\n              <div class=\"directions-input-container\">\r\n                  <!--*********directions body***********-->\r\n                    <div class=\"recipe-input-element\">\r\n                        <label for=\"recipe-directions-input\">Directions</label>\r\n                        <input type=\"text\" id=\"recipe-directions-input\"></input>\r\n                    </div>\r\n              </div>\r\n\r\n                <!------------->\r\n\r\n          </div>\r\n\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" id=\"modal-accept\" class=\"action-button\">Create Recipe</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </section>\r\n\r\n    <section id=\"edit-recipe-card\" class=\"hidden\"> <!--EditModal-->\r\n\r\n      <div id=\"edit-screen-overlay\" class=\"hidden\"></div><!--***-->    \r\n        <div id=\"edit-recipe-modal\" class=\"hidden\">\r\n        <div class=\"edit-modal\">\r\n\r\n          <div class=\"edit-recipe-modal-header\">\r\n            <h3>Edit A Recipe Card</h3>\r\n            <button type=\"button-x\" id=\"edit-modal-close-x\" class=\"edit-modal-hide-button-x\">&times;</button>\r\n          </div>\r\n\r\n          <div class=\"edit-recipe-modal-body\">\r\n\r\n            <div class=\"edit-recipe-input-element\">\r\n              <label for=\"edit-recipe-title-input\">Recipe Name</label>\r\n              <input type=\"text\" id=\"edit-recipe-title-input\"></input>\r\n            </div>\r\n\r\n            <div class=\"edit-recipe-input-element\">\r\n              <label for=\"edit-recipe-photo-input\">Photo URL</label>\r\n              <input type=\"text\" id=\"edit-recipe-photo-input\">\r\n            </div>\r\n\r\n            <div class=\"edit-recipe-input-element\">\r\n              <label for=\"edit-recipe-size-input\">Recipe Size (# of people)</label>\r\n              <input type=\"text\" id=\"edit-recipe-size-input\">\r\n            </div>\r\n\r\n            <div class=\"edit-recipe-input-element\">\r\n                <label for=\"edit-recipe-time-input\">Total Cooking Time</label>\r\n                <input type=\"text\" id=\"edit-recipe-time-input\">\r\n            </div>\r\n\r\n            <div class=\"edit-recipe-input-element\">\r\n                <label for=\"edit-recipe-author-input\">Recipe Author</label>\r\n                <input type=\"text\" id=\"edit-recipe-author-input\">\r\n            </div>\r\n\r\n          <div class=\"fieldset-group\"> \r\n            <div class=\"edit-recipe-input-element\">\r\n                <fieldset id=\"edit-recipe-difficulty-fieldset\" class=\"edit-difficulty-fieldset\">\r\n                  <legend>Difficulty Level</legend>\r\n                  <div>\r\n                    <input type=\"radio\" name=\"edit-difficulty-rating\" id=\"edit-difficulty-rating-easy\" value=\"Easy Street\" checked>\r\n                    <label for=\"edit-ifficulty-rating-easy\">Easy Street</label>\r\n                  </div>\r\n                  <div>\r\n                    <input type=\"radio\" name=\"edit-difficulty-rating\" id=\"edit-difficulty-rating-skills\" value=\"Got Skills\">\r\n                    <label for=\"edit-difficulty-rating-skills\">Got Skills</label>\r\n                  </div>\r\n                  <div>\r\n                    <input type=\"radio\" name=\"edit-difficulty-rating\" id=\"edit-difficulty-rating-chef\" value=\"Top Chef\">\r\n                    <label for=\"edit-difficulty-rating-chef\">Top Chef</label>\r\n                  </div>\r\n                </fieldset>\r\n            </div>\r\n\r\n            <div class=\"edit-recipe-input-element\">\r\n              <fieldset id=\"edit-recipe-spice-fieldset\" class=\"edit-spice-fieldset\">\r\n                <legend>Spice Level</legend>\r\n                <div>\r\n                  <input type=\"radio\" name=\"edit-spice-rating\" id=\"edit-spice-rating-none\" value=\"None\" checked>\r\n                  <label for=\"edit-spice-rating-none\">None</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"edit-spice-rating\" id=\"edit-spice-rating-mild\" value=\"Mild\">\r\n                  <label for=\"edit-spice-rating-mild\">Mild</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"edit-spice-rating\" id=\"edit-spice-rating-medium\" value=\"Medium\">\r\n                  <label for=\"edit-spice-rating-medium\">Medium</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"edit-spice-rating\" id=\"edit-spice-rating-hot\" value=\"Hot\">\r\n                  <label for=\"edit-spice-rating-hot\">Hot</label>\r\n                </div>\r\n              </fieldset>\r\n            </div>\r\n            <div class=\"edit-recipe-input-element\">\r\n              <fieldset id=\"edit-recipe-meal-fieldset\" class=\"edit-meal-fieldset\">\r\n                <legend>Which Meal?</legend>\r\n                <div>\r\n                  <input type=\"radio\" name=\"edit-meal-time\" id=\"edit-meal-time-breakfast\" value=\"Breakfast\" checked>\r\n                  <label for=\"edit-meal-time-breakfast\">Breakfast</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"edit-meal-time\" id=\"edit-meal-time-lunch\" value=\"Lunch\">\r\n                  <label for=\"edit-meal-time-lunch\">Lunch</label>\r\n                </div>\r\n                <div>\r\n                  <input type=\"radio\" name=\"edit-meal-time\" id=\"edit-meal-time-dinner\" value=\"Dinner\">\r\n                  <label for=\"edit-meal-time-dinner\">Dinner</label>\r\n                </div>\r\n              </fieldset>\r\n            </div>\r\n          </div>\r\n\r\n            <div class=\"edit-ingredients-input-container\">\r\n                 <!-- *********ingredients volume in number form***********-->\r\n                  <div class=\"edit-recipe-input-element\">\r\n                      <label for=\"edit-recipe-ingredient-input\">Ingredients</label>\r\n                      <input type=\"text\" id=\"edit-recipe-ingredient-input\">\r\n                  </div>\r\n            </div>\r\n              <div class=\"edit-directions-input-container\">\r\n                  <!--*********directions body***********-->\r\n                    <div class=\"edit-recipe-input-element\">\r\n                        <label for=\"edit-recipe-directions-input\">Directions</label>\r\n                        <input type=\"text\" id=\"edit-recipe-directions-input\"></input>\r\n                    </div>\r\n              </div>\r\n\r\n                <!------------->\r\n\r\n          </div>\r\n\r\n          <div class=\"edit-modal-footer\">\r\n            <button type=\"button\" id=\"edit-modal-accept\" class=\"edit-action-button\">Edit Recipe</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </section>";
},"useData":true});
})();