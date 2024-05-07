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


// //constants for the create account form data
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [username, setUsername] = useState('');
// const [name, setName] = useState('');
// const [pronouns, setPronouns] = useState('');


// /**
//  * signUpUserEmailPassword adds user to firebase authentication 
//  * if the email isn't already in use. Modified to also create a document
//  * that's added to the 'users' collection which stores the user's email,
//  * password, username, name, and pronouns.
//  * from https://github.com/wellesley-cs317-f23/ChatApp/blob/main/components/SignInOutPScreen.js
//  */
// export function signUpUserEmailPassword() {
//     console.log('\ncalled signUpUserEmailPassword');
//     //console.log(email);
//     if (auth.currentUser) {
//         signOut(auth); // sign out auth's current user (who is not loggedInUser, 
//         // or else we wouldn't be here
//     }
//     if (!email.includes('@wellesley.edu')) {
//         setErrorMsg('Not a valid email address');
//         return;
//     }
//     if (password.length < 6) {
//         setErrorMsg('Password too short');
//         return;
//     }
//     // Invoke Firebase authentication API for Email/Password sign up 
//     createUserWithEmailAndPassword(auth, email, password)
//         .then(async (userCredential) => {
//             console.log(`signUpUserEmailPassword: sign up for email ${email} succeeded (but email still needs verification).`);

//             // Note: could store userCredential here if wanted it later ...
//             // console.log(`createUserWithEmailAndPassword: setCredential`);
//             // setCredential(userCredential);

//             const db = getFirestore(firebaseApp)

//             try {
//                 const docRef = await addDoc(collection(db, 'users'), {
//                     email,
//                     // password,
//                     username,
//                     name,
//                     pronouns
//                 });

//                 console.log("created document with ID:", docRef.id)

//             } catch (error) {
//                 console.error('Error saving data:', error)
//             }

//             // Send verication email
//             console.log('signUpUserEmailPassword: about to send verification email');
//             sendEmailVerification(auth.currentUser)
//                 .then(() => {
//                     console.log('signUpUserEmailPassword: sent verification email');
//                     setErrorMsg(`A verification email has been sent to ${email}. You will not be able to sign in to this account until you click on the verification link in that email.`);
//                     // Email verification sent!
//                     // ...
//                 });
//         })
//         .catch((error) => {
//             console.log(`signUpUserEmailPassword: sign up failed for email ${email}`);
//             const errorMessage = error.message;
//             // const errorCode = error.code; // Could use this, too.
//             console.log(`createUserWithEmailAndPassword: ${errorMessage}`);
//             setErrorMsg(`createUserWithEmailAndPassword: ${errorMessage}`);
//         });
//     window.location.href = "https://cs.wellesley.edu/~ac119/test2/ricebook/login.html"
// }