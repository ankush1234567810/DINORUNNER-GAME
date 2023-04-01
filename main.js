const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgnUyu8weqlNGdy153O4o7Tx3YEesNmHw",
  authDomain: "dino-runner-2.firebaseapp.com",
  projectId: "dino-runner-2",
  storageBucket: "dino-runner-2.appspot.com",
  messagingSenderId: "774099978611",
  appId: "1:774099978611:web:29fa3fa161263e7c251d06"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}