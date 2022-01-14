room_name= localStorage.getItem("room")
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name_get= message_data["name"]
msg_get= message_data["message"]
like_get= message_data["like"]

name_row_tag= "<h4>"+name_get+"<img class='user_tick' src='tick.png'/></h4>"
msg_row_tag= "<h4 class='message_h4'>"+msg_get+"</h4>"
button_row_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like_get+" onclick='like_btn(this.id)'>"
span_row_tag="<span  class='glyphicon glyphicon-thumbs-up'> like:"+like_get+"</span></button><hr>"

mix_row_tag= name_row_tag+msg_row_tag+button_row_tag+span_row_tag
document.getElementById("output").innerHTML += mix_row_tag
//End code
 } });  }); }
getData();
function logout(){
 localStorage.removeItem("myname")
 localStorage.removeItem("room")
 window.location ="index.html"
}
user_name= localStorage.getItem("namem")

function send() {
 msg = document.getElementById("msg").value
 firebase. database().ref(room_name).push({ 
 name: user_name, 
 message : msg, 
 like:0 
})
document.getElementById("msg").value="";
}