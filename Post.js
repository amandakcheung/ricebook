// // handles new posts + displaying posts

//import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, addDoc, collection, doc, setDoc,
    query, where, getDocs, orderBy, or} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBDuFphrIjYTvHKXnziZiVKGFUCeWjtchA",
    authDomain: "ricebook-3f5ae.firebaseapp.com",
    projectId: "ricebook-3f5ae",
    storageBucket: "ricebook-3f5ae.appspot.com",
    messagingSenderId: "900913589804",
    appId: "1:900913589804:web:47afc2480bd97e39f3ab89",
    measurementId: "G-WMM8C0MRFS"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// New for images:
const db = getFirestore(firebaseApp); // for storaging messages in Firestore


//const firebaseProps = { auth, db, storage }


/*******END FIREBASE INITIALIZING **********************************/

// function formatJSON(jsonVal) {
//     return JSON.stringify(jsonVal, null, 2);
// }



// // Default email and password (simplifies testing)
// const defaultEmail = '';
// const defaultPassword = '';
// //const defaultEmail = '';
// //const defaultPassword = ''

// // Shared state for authentication 
// const [email, setEmail] = useState(defaultEmail); // Provide default email for testing
// const [password, setPassword] = useState(defaultPassword); // Provide default passwored for testing
// // const [email, setEmail] = useState(''); // Provide default email for testing
// // const [password, setPassword] = useState(''); // Provide default passwored for testing
//const db = firebase.firestore();

export function newPost() {
    window.location.href = "https://cs.wellesley.edu/~ac119/test2/ricebook/new_post.html"
    document.getElementById("name").value = '';
    document.getElementById("title").value = ''
}

export function createPost() {
    console.log('clicked')
    const nameValue = document.getElementById("name").value;
    const titleValue = document.getElementById("title").value;
    const backgroundValue = document.getElementById('background').value;
    const tag = document.getElementById('tag').value
    const notes = document.getElementById('notes').value
    const fullIngredient = document.querySelectorAll('#ingredient')
    const ingredientArray = []
    fullIngredient.forEach(function(ingredient){
        var fullString = ''
        fullString += ingredient.querySelector('#amount').value;
        fullString += " "
        fullString += ingredient.querySelector('#measurement').value;
        fullString += " "
        fullString += ingredient.querySelector('#item').value
        ingredientArray.push(fullString)
    })
    console.log(nameValue)
    console.log(titleValue)
    console.log(backgroundValue)
    console.log(tag)
    console.log(notes)
    console.log(ingredientArray)
    addToFirebase(nameValue, titleValue, backgroundValue, ingredientArray, notes, tag)
    window.location.href = "https://cs.wellesley.edu/~ac119/test2/ricebook/feed.html"
}

function addToFirebase(name, title, background, ingredients, notes, tags) {
    addDoc(collection(db, "recipes"), {
        name,
        title,
        background, 
        ingredients, 
        notes,
        tags
    });

}

export function addNewIngredient(){
    var ingredientDropDown = document.getElementById('ingredients')
    var bigdiv = document.createElement('div')
    bigdiv.setAttribute('id', 'ingredient')
    var amt = document.createElement('input')
    amt.setAttribute('type', 'amount')
    amt.setAttribute('id', "amount")
    amt.setAttribute('step', '0.01')
    amt.setAttribute('placeholder','0.00')
    bigdiv.appendChild(amt)
    var select = document.createElement('select')
    select.setAttribute('id', 'measurement');
    var options = ['oz', 'cup','tsp','tbsp', 'gram', 'floz', 'n/a'];
    options.forEach(function(optionText) {
        var option = document.createElement('option');
        option.text = optionText;
        option.value = optionText;
        select.appendChild(option);
    });
    var itm = document.createElement('input')
    itm.setAttribute('type', 'text')
    itm.setAttribute('id', 'item')
    itm.setAttribute('name', 'item')
    itm.setAttribute('placeholder', 'eggs')
    bigdiv.appendChild(select)
    bigdiv.appendChild(itm)
    ingredientDropDown.appendChild(bigdiv)
}

async function loadRecipes(){
    const q = query(collection(db, 'recipes'));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    querySnapshot.forEach(doc =>{
        var name = doc._document.data.value.mapValue.fields.name.stringValue
        var title = doc._document.data.value.mapValue.fields.title.stringValue
        var background = doc._document.data.value.mapValue.fields.background.stringValue
        var notes = doc._document.data.value.mapValue.fields.notes.stringValue
        var tags = doc._document.data.value.mapValue.fields.tags.stringValue
        var ingredients = doc._document.data.value.mapValue.fields.ingredients.arrayValue.values
        var ingredientsArray = []
        ingredients.forEach(item=>{
            ingredientsArray.push(item.stringValue)
        })
        console.log (name, title, background, notes)
        console.log(ingredientsArray)
        var bigDiv = document.createElement('div')
        bigDiv.setAttribute('id', 'post')

        var headers = document.createElement('h4')
        headers.innerHTML= 'Name:';
        bigDiv.appendChild(headers)
        var info = document.createElement('p')
        info.innerHTML = name
        bigDiv.appendChild(info)

        headers = document.createElement('h4')
        headers.innerHTML= 'Title:';
        bigDiv.appendChild(headers)
        info = document.createElement('p')
        info.innerHTML = title
        bigDiv.appendChild(info)

        headers = document.createElement('h4')
        headers.innerHTML= 'Background:';
        bigDiv.appendChild(headers)
        info = document.createElement('p')
        info.innerHTML = background
        bigDiv.appendChild(info)

        headers = document.createElement('h4')
        headers.innerHTML= 'Tags:';
        bigDiv.appendChild(headers)
        info = document.createElement('p')
        info.innerHTML = tags
        bigDiv.appendChild(info)

        headers = document.createElement('h4')
        headers.innerHTML= 'Ingredients:';
        bigDiv.appendChild(headers)
        info = document.createElement('ul')
        ingredientsArray.forEach(ingredient=>{
            var li = document.createElement('li')
            li.innerHTML = ingredient
            info.appendChild(li)
        })
        bigDiv.appendChild(info)

        document.getElementById('all-recipes').appendChild(bigDiv)
    })
}
export {loadRecipes};