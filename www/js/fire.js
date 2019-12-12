var firebaseConfig = {
  apiKey: "AIzaSyC5dnQhTyaHDjlKsyGjB78s31hNSYSmax8",
  authDomain: "ruttic-20670.firebaseapp.com",
  databaseURL: "https://ruttic-20670.firebaseio.com",
  projectId: "ruttic-20670",
  storageBucket: "ruttic-20670.appspot.com",
  messagingSenderId: "252848727875",
  appId: "1:252848727875:web:05282133f9f6680075f1f6",
  measurementId: "G-GF4JYGD4JS"
};
// Initialize Firebase
var firebase;
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

var ui = new firebaseui.auth.AuthUI(firebase.auth());


var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  
  signInSuccessUrl: 'pagina3.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

var almacenamiento= firebase.storage().ref();
almacenamiento.child("videos/dominadas.mp4");
console.log(almacenamiento);
console.log("si pudo leerlo");
