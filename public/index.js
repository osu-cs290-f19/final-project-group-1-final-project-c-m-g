/*
index.js file for index.html, will eventually be replaced with handlebars, but this is basic implementation before we continue
*/
var createModal = document.querySelector("#add-recipe-modal");
var editModal;
var displayModal;
var modalBackdrop = document.querySelector("#screen-overlay");
var cancelRecipe;
var createRecipe = document.getElementById("modal-accept");
var searchButton = document.getElementById("search-button");
var addIngredientButton = document.getElementById("add-ing-line");
var ingredientLine;

function searchRecipe(){
    var searchTitle = String(document.querySelector("#search-title").value);
    var maxTime = Number(document.querySelector("#search-max-time").value);
    var famSize = Number(document.querySelector("#search-fam-size").value);
    var difficulty = String(document.getElementById("search-difficulty").value);

    var recipes = document.getElementsByClassName("#recipe-preview");
}

function toggleModal(){
    createModal.classList.toggle("hidden");
    modalBackdrop.classList.toggle("hidden");
    document.querySelector("#recipe-title-input").value = "";
    document.querySelector("#recipe-photo-input").value = "";
    document.querySelector("#recipe-size-input").value = "";
    document.querySelector("#time-city-input").value = "";
    document.querySelector("#recipe-author-input").value = "";
    document.querySelector("#difficulty-rating-easy").checked = true;
    document.querySelector("#spice-rating-none").checked = true;
    document.querySelector("#recipe-volume-input").value = "";
    document.querySelector("#measure-rating-easy").checked = true;
    document.querySelector("#ingredient-name-input").value = "";
    document.querySelector("#recipe-directions-input").value = "";
}

function toggleCreateModal(){

}
function addRecipeLine(){
    var ingredientMeasure ="";
    var ingredientLoop = document.getElementsByName('measure-rating');
    for(i=0;i<ingredientLoop.length;i++){
        if(ingredientLoop[i].checked){
            ingredientMeasure=ingredientLoop[i].value;
        }
    }
    ingredientLine+= document.querySelector("#recipe-volume-input").value + " " + ingredientMeasure + " " + document.querySelector("#ingredient-name-input").value+". ";
    document.querySelector("#recipe-volume-input").value = "";
    document.querySelector("#measure-rating-easy").checked = true;
    document.querySelector("#ingredient-name-input").value = "";
}

function toggleEditModal(){

}

function toggleDisplayModal(){

}

function createRecipe(){

}

addIngredientButton.addEventListener('click',addRecipeLine);
searchButton.addEventListener('click',searchRecipe);