/*
index.js file for index.html, will eventually be replaced with handlebars, but this is basic implementation before we continue
*/
var createModal = document.querySelector("#add-recipe-modal");
var editModal = document.getElementById("edit-recipe-button");
var cancelEdit = document.querySelector("#edit-modal-close-x");
var cancelDisplay = document.querySelector("#display-modal-close-x");
var displayModal = document.querySelector("#recipe-cards");
var modalBackdrop = document.querySelector("#screen-overlay");
var cancelRecipe = document.querySelector("#modal-close-x");
var createRecipe = document.getElementById("modal-accept");
var editRecipe = document.getElementById('edit-modal-accept');
var searchButton = document.getElementById("search-button");
var addIngredientButton = document.getElementById("add-ing-line");
var showCreateModal = document.querySelector("#add-recipe-button");
var shwoRecipe = document.querySelector("#show-recipe-button");
var deleteButton = document.querySelector("#delete-recipe-button");

var allTab = document.getElementsByName("tab-all");
var breakfastTab = document.getElementsByName("tab-breakfast");
var lunchTab = document.getElementsByName("tab-lunch");
var dinnerTab = document.getElementsByName("tab-dinner");

var recipeEditModal = document.querySelector("#edit-recipe-modal");
var editLoop = document.getElementsByName('edit-recipe');
var editCheck;

function allTabSort(){
    var recipeSort = document.getElementsByClassName("recipe-preview-container");
    for(i=0;i<recipeSort.length;i++){
        //console.log(recipeSort[i]);
        if(recipeSort[i].classList.contains("hidden")){
            recipeSort[i].classList.remove("hidden");
        }
    }
}
function breakfastTabSort(){
    allTabSort();
    var recipeSort = document.getElementsByClassName("recipe-preview-container");
    var reTime;
    for(i=0;i<recipeSort.length;i++){
        reTime = recipeSort[i].getAttribute('data-meal');
        if(recipeSort[i].getAttribute("data-meal")!= "Breakfast"){
            recipeSort[i].classList.add("hidden");
        }
    }
}
function lunchTabSort(){
    allTabSort();
    var recipeSort = document.getElementsByClassName("recipe-preview-container");
    var reTime;
    for(i=0;i<recipeSort.length;i++){
        reTime = recipeSort[i].getAttribute('data-meal')
        if(recipeSort[i].getAttribute("data-meal")!= "Lunch"){
            recipeSort[i].classList.add("hidden");
        }
    }
}
function dinnerTabSort(){
    allTabSort();
    var recipeSort = document.getElementsByClassName("recipe-preview-container");
    var reTime;
    for(i=0;i<recipeSort.length;i++){
        reTime = recipeSort[i].getAttribute('data-meal')
        if(recipeSort[i].getAttribute("data-meal")!= "Dinner"){
            recipeSort[i].classList.add("hidden");
        }
    }
}

function searchRecipe(){
    var searchTitle = String(document.querySelector("#search-title").value);
    var maxTime = Number(document.querySelector("#max-time").value);
    var famSize = Number(document.querySelector("#fam-size").value);
    var difficulty = String(document.getElementById("search-difficulty").value);
    var author = String(document.querySelector("#fam-mem").value);
    var recipes = document.getElementsByClassName("recipe-preview-container");
    //var parent = document.getElementsByClassName("recipe-preview");
    var ele;
    var text;

    for(i=recipes.length-1;i>=0;i--){
        if(searchTitle !=""){
            ele = recipes[i].getElementsByTagName("img");
            text = String(ele[0].getAttribute("alt"));
            var equal = text.toUpperCase().includes(searchTitle.toUpperCase());
            if(!equal){
                recipes[i].setAttribute('hidden',true);
                continue;
            }
        }
        ele = Number(recipes[i].getAttribute('data-cook-time'));
        if(maxTime !=""){
            if(ele<maxTime){
                recipes[i].setAttribute('hidden',true);
                continue;
            }
        }
        ele = Number(recipes[i].getAttribute('data-people-served'));
        if(famSize !=""){
            if(ele<famSize){
                recipes[i].setAttribute('hidden',true);
                continue;
            }
        }
        ele = String(recipes[i].getAttribute('data-difficulty'))
        if(difficulty !=""){
            if(ele !== difficulty){
                recipes[i].setAttribute('hidden',true);
                continue;
            }
        }
        ele = String(recipes[i].getAttribute('data-author'));
        if(author != ""){
            if(ele !== author){
                recipes[i].setAttribute('hidden',true);
                continue;
            }
        }
    }
}
function toggleEditModal(){
    document.querySelector("#edit-recipe-title-input").value = "";
    document.querySelector("#edit-recipe-photo-input").value = "";
    document.querySelector("#edit-recipe-size-input").value = "";
    document.querySelector("#edit-recipe-time-input").value = "";
    document.querySelector("#edit-recipe-author-input").value = "";
    document.querySelector("#edit-difficulty-rating-easy").checked = true;
    document.querySelector("#meal-time-breakfast").checked = true;
    document.querySelector("#edit-spice-rating-none").checked = true;
    document.querySelector("#edit-recipe-ingredient-input").value = "";
    document.querySelector("#edit-recipe-directions-input").value = "";
}
function hideEditModal(){
    toggleEditModal();
    var edit = document.getElementById("edit-recipe-card");
    var back = document.getElementById("edit-screen-overlay");
    var eM = document.getElementById("edit-recipe-modal");
    edit.classList.add("hidden");
    back.classList.add("hidden");
    eM.classList.add("hidden");
}
function toggleAddModal(){
    document.querySelector("#recipe-title-input").value = "";
    document.querySelector("#recipe-photo-input").value = "";
    document.querySelector("#recipe-size-input").value = "";
    document.querySelector("#recipe-time-input").value = "";
    document.querySelector("#recipe-author-input").value = "";
    document.querySelector("#difficulty-rating-easy").checked = true;
    document.querySelector("#meal-time-breakfast").checked = true;
    document.querySelector("#spice-rating-none").checked = true;
    document.querySelector("#recipe-ingredient-input").value = "";
    document.querySelector("#recipe-directions-input").value = "";
    var add = document.getElementById("add-recipe-card");
    var back = document.getElementById("add-screen-overlay");
    var aM = document.getElementById("add-recipe-modal");
    add.classList.add("hidden");
    back.classList.add("hidden");
    aM.classList.add("hidden");
}
function showAddModal(){
    var add = document.getElementById("add-recipe-card");
    var back = document.getElementById("add-screen-overlay");
    var aM = document.getElementById("add-recipe-modal");
    add.classList.remove("hidden");
    back.classList.remove("hidden");
    aM.classList.remove("hidden");
}
function hideDisplayModal(){
    displayModal.classList.add("hidden");
    var disM = document.getElementById("recipe-cards-popped");
    disM.classList.add("hidden");
    var rP = document.getElementById("pop-modal");
    rP.classList.add("hidden");
}
function CreateModal(){
    var recipeName = document.querySelector("#recipe-title-input").value;
    var recipePhoto = document.querySelector("#recipe-photo-input").value;
    var recipeSize = document.querySelector("#recipe-size-input").value;
    var recipeTime = document.querySelector("#recipe-time-input").value;
    var recipeAuthor = document.querySelector("#recipe-author-input").value;
    var recipeDifficulty;
    var recipeDifficultyLoop = document.getElementsByName("difficulty-rating");
    for(i=0;i<recipeDifficultyLoop.length;i++){
        if(recipeDifficultyLoop[i].checked){
            recipeDifficulty = recipeDifficultyLoop[i].value;
        }
    }
    var recipeSpice;
    var recipeSpiceLoop = document.getElementsByName("spice-rating");
    for(i=0;i<recipeSpiceLoop.length;i++){
        if(recipeSpiceLoop[i].checked){
            recipeSpice = recipeSpiceLoop[i].value;
        }
    }
    var recipeMeal;
    var recipeMealLoop = document.getElementsByName("meal-time");
    for(i=0;i<recipeMealLoop.length;i++){
        if(recipeMealLoop[i].checked){
            recipeMeal = recipeMealLoop[i].value;
        }
    }
    var recipeIngredient = document.querySelector("#recipe-ingredient-input").value;
    var recipeDirection = document.querySelector("#recipe-directions-input").value;

    var recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe-preview-container');
    recipeDiv.setAttribute('data-cook-time',recipeTime);
    recipeDiv.setAttribute('data-people-served',recipeSize);
    recipeDiv.setAttribute('data-difficulty',recipeDifficulty);
    recipeDiv.setAttribute('data-spice',recipeSpice);
    recipeDiv.setAttribute('data-ingredients',recipeIngredient);
    recipeDiv.setAttribute('data-directions',recipeDirection);
    recipeDiv.setAttribute('data-author',recipeAuthor);
    recipeDiv.setAttribute('data-meal',recipeMeal);

    var recipeImageContainerDiv = document.createElement('div');
    recipeImageContainerDiv.classList.add('recipe-preview-image-container');
    recipeDiv.appendChild(recipeImageContainerDiv);

    var recipePhotoImg = document.createElement('img');
    recipePhotoImg.src = recipePhoto;
    recipePhotoImg.setAttribute('alt',recipeName);
    recipeImageContainerDiv.appendChild(recipePhotoImg);

    var recipeHeader = document.createElement('h3');
    recipeDiv.appendChild(recipeHeader);

    var recipeHeaderA = document.createElement('a');
    recipeHeaderA.setAttribute('href','#');
    recipeHeaderA.classList.add('recipe-preview-title');
    recipeHeaderA.textContent=recipeName;
    recipeHeader.appendChild(recipeHeaderA);

    var recipeSpan = document.createElement('span');
    recipeSpan.classList.add('preview-data-author');
    recipeSpan.textContent = "Created by: "+ recipeAuthor;
    recipeDiv.appendChild(recipeSpan);

    var editRecipeHeader = document.createElement('h2');
    editRecipeHeader.classList.add("preview-edit-recipe-text")
    editRecipeHeader.textContent= "Edit Recipe";
    recipeDiv.appendChild(editRecipeHeader);

    var recipeEdit = document.createElement('input');
    recipeEdit.classList.add("preview-edit-checkbox");
    recipeEdit.setAttribute('type','checkbox');
    recipeEdit.setAttribute("name","edit-recipe");
    recipeEdit.setAttribute("value","edit");
    recipeDiv.appendChild(recipeEdit);
    
    var recipeContainer = document.getElementsByClassName('recipe-preview');
    recipeContainer[0].appendChild(recipeDiv);
    toggleAddModal();
   // add.classList.add("hidden");
    //back.classList.add("hidden");
}

function EditModal(){
    editCheck = null;
    recipeEdit = document.getElementsByClassName("recipe-preview-container");
    var editLoop = document.getElementsByName('edit-recipe');
    for(i=0;i<recipeEdit.length;i++){
        if(editLoop[i].checked){
            editCheck=Number(i);
        }
    }
    if(editCheck === null){
        alert("Please select a recipe to edit.")
        return;
    }
    var edit = document.getElementById("edit-recipe-card");
    var back = document.getElementById("edit-screen-overlay");
    var eM = document.getElementById("edit-recipe-modal");
    edit.classList.remove("hidden");
    back.classList.remove("hidden");
    eM.classList.remove("hidden");

    console.log(editCheck);
    var temp = recipeEdit[editCheck].getElementsByTagName("img");
    var editRecipeName = String(temp[0].getAttribute("alt"));
    var editRecipePhoto = String(temp[0].getAttribute("src"));
    var editRecipeSize = Number(recipeEdit[editCheck].getAttribute("data-people-served"));
    var editRecipeTime = Number(recipeEdit[editCheck].getAttribute("data-cook-time"));
    var editRecipeAuthor = String(recipeEdit[editCheck].getAttribute("data-author"));
    switch(String(recipeEdit[editCheck].getAttribute("data-difficulty"))){
        case "Easy Street":{
            document.querySelector("#edit-difficulty-rating-easy").checked = true;
            break;
        }
        case "Got Skills":{
            document.querySelector("#edit-difficulty-rating-skills").checked = true;
            break;
        }
        case "Top Chef":{
            document.querySelector("#edit-difficulty-rating-chef").checked = true;
            break;
        }
    }
    switch(String(recipeEdit[editCheck].getAttribute("data-spice"))){
        case "None":{
            document.querySelector("#edit-spice-rating-none").checked = true;
            break;
        }
        case "Mild":{
            document.querySelector("#edit-spice-rating-mild").checked = true;
            break;
        }
        case "Medium":{
            document.querySelector("#edit-spice-rating-medium").checked = true;
            break;
        }
        case "Hot":{
            document.querySelector("#edit-spice-rating-hot").checked = true;
            break;
        }
    }
    switch(String(recipeEdit[editCheck].getAttribute("data-meal"))){
        case "Breakfast": {
            document.querySelector("#edit-meal-time-breakfast").checked = true;
            break;
        }
        case "Lunch": {
            document.querySelector("#edit-meal-time-lunch").checked = true;
            break;
        }
        case "Dinner": {
            document.querySelector("#edit-meal-time-breakfast").checked = true;
            break;
        }
    }
    var editIngredients = String(recipeEdit[editCheck].getAttribute("data-ingredients"));
    var editDirections = String(recipeEdit[editCheck].getAttribute("data-directions"));

    document.querySelector("#edit-recipe-title-input").value = editRecipeName;
    document.querySelector("#edit-recipe-photo-input").value = editRecipePhoto;
    document.querySelector("#edit-recipe-size-input").value = editRecipeSize;
    document.querySelector("#edit-recipe-time-input").value = editRecipeTime;
    document.querySelector("#edit-recipe-author-input").value = editRecipeAuthor;
    document.querySelector("#edit-recipe-ingredient-input").value = editIngredients;
    document.querySelector("#edit-recipe-directions-input").value = editDirections;
}
function editRecipeModal(){
    var previewTitle = recipeEdit[editCheck].getElementsByTagName("a");
    previewTitle[0].textContent = document.querySelector("#edit-recipe-title-input").value;
    var imgEdit = recipeEdit[editCheck].getElementsByTagName("img");
    imgEdit[0].src = document.querySelector("#edit-recipe-photo-input").value;
    imgEdit[0].setAttribute("alt",document.querySelector("#edit-recipe-title-input").value);
    recipeEdit[editCheck].setAttribute('data-people-served',document.querySelector("#edit-recipe-size-input").value);
    recipeEdit[editCheck].setAttribute('data-cook-time',document.querySelector("#edit-recipe-time-input").value);
    var recipeDifficultyEdit;
    var recipeDifficultyLoopEdit = document.getElementsByName("edit-difficulty-rating");
    for(i=0;i<recipeDifficultyLoopEdit.length;i++){
        if(recipeDifficultyLoopEdit[i].checked){
            recipeDifficultyEdit = recipeDifficultyLoopEdit[i].value;
        }
    }
    var recipeSpiceEdit;
    var recipeSpiceLoopEdit = document.getElementsByName("edit-spice-rating");
    for(i=0;i<recipeSpiceLoopEdit.length;i++){
        if(recipeSpiceLoopEdit[i].checked){
            recipeSpiceEdit = recipeSpiceLoopEdit[i].value;
        }
    }
    var recipeMealEdit;
    var recipeMealLoopEdit = document.getElementsByName("edit-meal-time");
    for(i=0;i<recipeMealLoopEdit.length;i++){
        if(recipeMealLoopEdit[i].checked){
            recipeMealEdit = recipeMealLoopEdit[i].value;
        }
    }
    recipeEdit[editCheck].setAttribute('data-difficulty',recipeDifficultyEdit);
    recipeEdit[editCheck].setAttribute('data-spice',recipeSpiceEdit);
    recipeEdit[editCheck].setAttribute('data-ingredients',document.querySelector("#edit-recipe-ingredient-input").value);
    recipeEdit[editCheck].setAttribute('data-directions',document.querySelector("#edit-recipe-directions-input").value);
    recipeEdit[editCheck].setAttribute('data-author',document.querySelector("#edit-recipe-author-input").value);
    recipeEdit[editCheck].setAttribute('data-meal',recipeMealEdit);
    var editSpan = recipeEdit[editCheck].getElementsByTagName('span');
    editSpan[0].textContent = "Created by: "+ document.querySelector("#edit-recipe-author-input").value;
    for(i=0;i<recipeEdit.length;i++){
        if(editLoop[i].checked){
            editLoop[i].checked = false;
        }
    }
    toggleEditModal();
    var edit = document.getElementById("edit-recipe-card");
    var back = document.getElementById("edit-screen-overlay");
    edit.classList.add("hidden");
    back.classList.add("hidden");
}
function DisplayModal(){
    editCheck=null;
    recipeEdit = document.getElementsByClassName("recipe-preview-container");
    for(i=0;i<recipeEdit.length;i++){
        if(editLoop[i].checked){
            editCheck=Number(i);
        }
    }
    if(editCheck === null){
        alert ("Please select a recipe to display.")
        return;
    }
    displayModal.classList.remove("hidden");
    var disM = document.getElementById("recipe-cards-popped");
    disM.classList.remove("hidden");
    var rP = document.getElementById("pop-modal");
    rP.classList.remove("hidden");
    console.log(recipeEdit[editCheck]);
    var recipePopped = document.getElementsByClassName("recipes");
    console.log(recipePopped);
    recipePopped[0].setAttribute("data-cook-time",recipeEdit[editCheck].getAttribute("data-cook-time"));
    recipePopped[0].setAttribute("data-people-served",recipeEdit[editCheck].getAttribute("data-people-served"));
    recipePopped[0].setAttribute("data-difficulty",recipeEdit[editCheck].getAttribute("data-difficulty"));
    recipePopped[0].setAttribute("data-spice",recipeEdit[editCheck].getAttribute("data-spice"));
    recipePopped[0].setAttribute("data-ingredients",recipeEdit[editCheck].getAttribute("data-ingredients"));
    recipePopped[0].setAttribute("data-directions",recipeEdit[editCheck].getAttribute("data-directions"));
    recipePopped[0].setAttribute("data-author",recipeEdit[editCheck].getAttribute("data-author"));
    recipePopped[0].setAttribute("data-meal",recipeEdit[editCheck].getAttribute("data-meal"));
    var poppedImg = recipePopped[0].getElementsByTagName("img");
    poppedImg[0].src = recipeEdit[editCheck].getElementsByTagName("img")[0].src;
    poppedImg[0].setAttribute("alt",recipeEdit[editCheck].getElementsByTagName("img")[0].getAttribute("alt"));
    recipePopped[0].getElementsByTagName("a")[0].textContent = recipeEdit[editCheck].getElementsByTagName('a')[0].textContent;
    recipePopped[0].getElementsByTagName("span")[0].textContent = recipeEdit[editCheck].getAttribute("data-cook-time")+" Minutes";
    recipePopped[0].getElementsByTagName("span")[1].textContent = recipeEdit[editCheck].getAttribute("data-people-served");
    recipePopped[0].getElementsByTagName("span")[2].textContent = recipeEdit[editCheck].getAttribute("data-difficulty");
    recipePopped[0].getElementsByTagName("li")[0].textContent = "Ingredients: \n" + recipeEdit[editCheck].getAttribute("data-ingredients");
    recipePopped[0].getElementsByTagName("p")[0].textContent = "Instructions: \n" + recipeEdit[editCheck].getAttribute("data-directions");
    recipePopped[0].getElementsByTagName("span")[6].textContent = "Created by: " + recipeEdit[editCheck].getAttribute("data-author");
}
function deleteRecipe(){
    editCheck=null;
    recipeEdit = document.getElementsByClassName("recipe-preview-container");
    for(i=0;i<recipeEdit.length;i++){
        if(editLoop[i].checked){
            editCheck=Number(i);
        }
    }
    if(editCheck === null){
        alert ("Please select a recipe to delete.")
        return;
    }
    var removed = recipeEdit[editCheck];
    var recipeContainer = document.getElementsByClassName('recipe-preview');
    recipeContainer[0].removeChild(removed);
}

showCreateModal.addEventListener('click',showAddModal);
searchButton.addEventListener('click',searchRecipe);
cancelRecipe.addEventListener('click',toggleAddModal);
createRecipe.addEventListener('click',CreateModal);
editRecipe.addEventListener('click',editRecipeModal);
editModal.addEventListener('click',EditModal);
cancelEdit.addEventListener('click',hideEditModal);
shwoRecipe.addEventListener('click',DisplayModal);
allTab[0].addEventListener('click',allTabSort);
breakfastTab[0].addEventListener('click',breakfastTabSort);
lunchTab[0].addEventListener('click',lunchTabSort);
dinnerTab[0].addEventListener('click',dinnerTabSort);
deleteButton.addEventListener('click',deleteRecipe);
cancelDisplay.addEventListener('click',hideDisplayModal);