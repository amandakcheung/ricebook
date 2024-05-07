// // // handles new posts + displaying posts

// //import { firebaseConfig } from './firebaseConfig.js';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyBDuFphrIjYTvHKXnziZiVKGFUCeWjtchA",
//     authDomain: "ricebook-3f5ae.firebaseapp.com",
//     projectId: "ricebook-3f5ae",
//     storageBucket: "ricebook-3f5ae.appspot.com",
//     messagingSenderId: "900913589804",
//     appId: "1:900913589804:web:47afc2480bd97e39f3ab89",
//     measurementId: "G-WMM8C0MRFS"
// };
// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);

// // New for images:
// const db = getFirestore(firebaseApp); // for storaging messages in Firestore

// const [errorMsg, setErrorMsg] = useState('');
// const defaultEmail = '';
// const defaultPassword = '';

// // Shared state for authentication 
// const [email, setEmail] = useState(defaultEmail); // Provide default email for testing
// const [password, setPassword] = useState(defaultPassword); // Provide default passwored for testing

// const [loggedInUser, setLoggedInUser] = useState(null);

// /** 
//  * Function to log out the user. 
//  * from https://github.com/wellesley-cs317-f23/ChatApp/blob/main/components/SignInOutPScreen.js
//  */
// export function logOut() {
//     console.log('logOut');
//     console.log(`logOut: emailOf(auth.currentUser)=${emailOf(auth.currentUser)}`);
//     console.log(`logOut: emailOf(loggedInUser)=${emailOf(loggedInUser)}`);
//     console.log(`logOut: setLoggedInUser(null)`);
//     loginProps.setLoggedInUser(null);
//     console.log('logOut: signOut(auth)');
//     signOut(auth); // Will eventually set auth.currentUser to null     
// }

// function emailOf(user) {
//     if (user) {
//       return user.email;
//     } else {
//       return null;
//     }
//   }
  
// /**
//  * signInUserEmailPassword calls the firebase authentication function for email and password
//  * login and checks if the user's email is verified.
//  * from https://github.com/wellesley-cs317-f23/ChatApp/blob/main/components/SignInOutPScreen.js
//  */
// export function signInUserEmailPassword() {
//     console.log('\ncalled signInUserEmailPassword');
//     console.log(`signInUserEmailPassword: emailOf(currentUser)0=${emailOf(auth.currentUser)}`);
//     console.log(`signInUserEmailPassword: emailOf(loginProps.loggedInUser)0=${emailOf(loginProps.loggedInUser)}`);
//     setEmail(document.getElementById('username'));
//     setPassword(document.getElementById('password'));
//     //Invoke Firebaseauthentication API for email/password sign in
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             console.log(`signInUserEmailPassword succeeded for email ${loginProps.email}; have userCredential for emailOf(auth.currentUser)=${emailOf(auth.currentUser)} (but may not be verified)`);
//             console.log(`signInUserEmailPassword: emailOf(currentUser)1=${emailOf(auth.currentUser)}`);
//             console.log(`signInUserEmailPassword: emailOf(loginProps.loggedInUser)1=${emailOf(loginProps.loggedInUser)}`);

//             // Only log in auth.currentUser if their email is verified
//             checkEmailVerification();
//             // Clear email/password inputs 
//             // loginProps.setEmail(loginProps.defaultEmail);
//             // loginProps.setPassword(loginProps.defaultPassword);
//         })
//         .catch((error) => {
//             console.log(`signInUserEmailPassword: sign in failed for email ${email}`);
//             console.log(JSON.stringify(error))
//             console.error('ERROR DETAILS: ', error)
//             setErrorMsg('Login failed.');
//         })
// }

// /**
//  * checkEmailVerification checks if the user has verified their email by 
//  * clicking the link that was sent via firebase
//  * from https://github.com/wellesley-cs317-f23/ChatApp/blob/main/components/SignInOutPScreen.js
//  */
// function checkEmailVerification() {
//     if (auth.currentUser) {
//         console.log(`checkEmailVerification: auth.currentUser.emailVerified=${auth.currentUser.emailVerified}`);
//         if (auth.currentUser.emailVerified) {
//             console.log(`checkEmailVerification: setLoggedInUser for ${auth.currentUser.email}`);
//             // console.log("\n*BEFORE SETTING LOGGEDINUSER======" + JSON.stringify(loggedInUser));
//             var currentUser = auth.currentUser;
//             loginProps.setLoggedInUser(currentUser);
//             console.log("**LOGGEDINUSER======" + JSON.stringify(loginProps.loggedInUser));
//             //console.log("***auth.currentUser======" + JSON.stringify(auth.currentUser));
//             console.log("checkEmailVerification: setErrorMsg('')");
//             setErrorMsg('');
//             window.location.href = "https://cs.wellesley.edu/~ac119/test2/ricebook/profile.html"
//         } else {
//             console.log('checkEmailVerification: remind user to verify email');
//             setErrorMsg(`You cannot sign in as ${auth.currentUser.email} until you verify that this is your email address. You can verify this email address by clicking on the link in a verification email sent by this app to ${auth.currentUser.email}.`)
//         }
//     }
// }
