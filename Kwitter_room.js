const firebaseConfig = {
    apiKey: "AIzaSyAd4CSnEcQZWp6RJJrIWMnEaYFpqf-q0ac",
    authDomain: "project93-9dcd5.firebaseapp.com",
    projectId: "project93-9dcd5",
    storageBucket: "project93-9dcd5.appspot.com",
    messagingSenderId: "202934541232",
    appId: "1:202934541232:web:60fa55e675f60c03e9d475"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

//End code
});});}
getData();
