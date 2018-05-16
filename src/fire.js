import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDyTzXHNw4gdpjomSDxfKlM0buq1-0TgNg",
  authDomain: "reactgram-3ae88.firebaseapp.com",
  databaseURL: "https://reactgram-3ae88.firebaseio.com",
  projectId: "reactgram-3ae88",
  storageBucket: "reactgram-3ae88.appspot.com",
  messagingSenderId: "754940643527"
};
var fire = firebase.initializeApp(config);
export default fire;