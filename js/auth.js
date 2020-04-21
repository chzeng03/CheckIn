//signup
const SignUpForm = document.querySelector('#SignUp-form');

SignUpForm.addEventListener('submit', (e) => {

    e.preventDefault();

    //get user info
    const email = SignUpForm['signUpemail'].value;
    const password = SignUpForm['signUppass'].value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {

        return db.collection('users').doc(cred.user.uid).set({
            FirstName: SignUpForm['signUpFN'].value,
            LastName: SignUpForm['signUpLN'].value,
            Organization: SignUpForm['signUpOrg'].value,
            Email: SignUpForm['signUpemail'].value,
            Password: SignUpForm['signUppass'].value
        });

    }).then(() => {

        window.alert("Please check your email and verify your email address. Thank You.");

        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });

        SignUpForm.reset();
    });

});