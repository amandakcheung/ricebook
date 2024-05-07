import { newPost, createPost, loadRecipes} from "./Post.js";
// import {signInUserEmailPassword} from "./Login.js"
import {addNewIngredient} from "./Post.js"

if (document.getElementById('newPost')){
const newPostButton = document.getElementById('newPost')
newPostButton.addEventListener('click', newPost)}

if (document.getElementById('submit-post')){
const submitPost = document.getElementById('submit-post')
submitPost.addEventListener('click', createPost)}
//document.getElementById("submit-post").addEventListener('click', console.log('hello'))

// const loginButton = document.getElementById('login-button')
// loginButton.addEventListener('click', signInUserEmailPassword)

if (document.getElementById('add-ingredient')){
const addIngredient = document.getElementById('add-ingredient')
addIngredient.addEventListener('click', addNewIngredient)}


// Call the function when the window is fully loaded
window.addEventListener('load', function() {
    // Check if the current URL matches the specified pattern
    if (window.location.href === 'https://cs.wellesley.edu/~ac119/test2/ricebook/feed.html') {
        loadRecipes();
    }
});
