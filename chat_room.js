function logout(){
    window.location.href = "index.html"
}
var firebaseConfig = {
    apiKey: "AIzaSyC8pow_KNjLP2921K664OBmLAWYh23086c",
    authDomain: "lets-chat-7dd75.firebaseapp.com",
    databaseURL: "https://lets-chat-7dd75-default-rtdb.firebaseio.com",
    projectId: "lets-chat-7dd75",
    storageBucket: "lets-chat-7dd75.appspot.com",
    messagingSenderId: "1006381693123",
    appId: "1:1006381693123:web:d18d7ff6f5b4bfc89fca76"
  };
  firebase. initializeApp(firebaseConfig);

  var namee = localStorage.getItem("namem")
  document.getElementById("user_name").innerHTML= "Welcome "+ namee 

  function Room(){
    room_name = document.getElementById("room_name").value
    localStorage.setItem("room", room_name)
 firebase.database().ref("/").child(room_name).update({
       purpose:"add"
 })
 document.getElementById("room_name").value=" ";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
console.log("I have get room name")
row="<div class='room_name' id="+Room_names+" onclick='directtoroomname(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+= row
//End code
});});}
getData();
function directtoroomname(name1){
localStorage.setItem("room", name1)
window.location="chat_page.html"
}