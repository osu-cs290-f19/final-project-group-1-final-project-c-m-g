/*
index.js file for index.html, will eventually be replaced with handlebars, but this is basic implementation before we continue
*/
var createModal = document.querySelector("#add-recipe-modal");
var editModal;
var displayModal;
var modalBackdrop = document.querySelector("#screen-overlay");
var cancelRecipe = document.querySelector("#modal-hide-button");
var createRecipe = document.getElementById("modal-accept");
var searchButton = document.getElementById("search-button");
var addIngredientButton = document.getElementById("add-ing-line");
var ingredientLine;

function searchRecipe(){
    var searchTitle = String(document.querySelector("#search-title").value);
    var maxTime = Number(document.querySelector("#search-max-time").value);
    var famSize = Number(document.querySelector("#search-fam-size").value);
    var difficulty = String(document.getElementById("search-difficulty").value);
    var author = String(document.querySelector("#search-fam-mem").value);
    var recipes = document.getElementsByClassName("#recipe-preview");
}

function toggleModal(){
    createModal.classList.toggle("hidden");
    modalBackdrop.classList.toggle("hidden");
    document.querySelector("#recipe-title-input").value = "";
    document.querySelector("#recipe-photo-input").value = "";
    document.querySelector("#recipe-size-input").value = "";
    document.querySelector("#recipe-time-input").value = "";
    document.querySelector("#recipe-author-input").value = "";
    document.querySelector("#difficulty-rating-easy").checked = true;
    document.querySelector("#spice-rating-none").checked = true;
    document.querySelector("#recipe-ingredient-input").value = "";
    document.querySelector("#recipe-directions-input").value = "";
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
    var recipeIngredient = document.querySelector("#recipe-ingredient-input").value;
    console.log(recipeIngredient);
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

    var recipeImageContainerDiv = document.createElement('div');
    recipeImageContainerDiv.classList.add('recipe-image-container');
    recipeDiv.appendChild(recipeImageContainerDiv);

    var recipePhotoImg = document.createElement('img');
    recipePhotoImg.src = recipePhoto;
    recipePhotoImg.setAttribute('alt',recipeName);
    recipeImageContainerDiv.appendChild(recipePhotoImg);

    var recipeHeader = document.createElement('h3');
    recipeDiv.appendChild(recipeHeader);

    var recipeHeaderA = document.createElement('a');
    recipeHeaderA.setAttribute('href','#');
    recipeHeaderA.classList.add('recipe-title');
    recipeHeaderA.textContent=recipeName;
    recipeHeader.appendChild(recipeHeaderA);

    var recipeSpan = document.createElement('span');
    recipeSpan.classList.add('data-author');
    recipeSpan.textContent = "Created by: "+ recipeAuthor;
    recipeDiv.appendChild(recipeSpan);
    
    console.log(recipeDiv);

    var recipeContainer = document.getElementsByClassName('recipe-preview');
    console.log(recipeContainer);
    recipeContainer[0].appendChild(recipeDiv);
    toggleModal();
}

function EditModal(){

}

function DisplayModal(){

}

function createRecipe(){

}

searchButton.addEventListener('click',searchRecipe);
//cancelRecipe.addEventListener('click',toggleModal);
createRecipe.addEventListener('click',CreateModal);