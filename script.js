// Initialize Firebase
// Paste your Firebase SDK snippet here

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Sign in with Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // Redirect to another page or show login success
        console.log("Logged in successfully:", user.email);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // Handle errors here, such as showing an alert
        alert(errorMessage);
    });
});
