function addUser() { 
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html";
}


function send()
{
    msg = document.getElementById("msg").value;
    Firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").value = "";
  }
  
  function redirectToRoomName(name)
{
    console.log(name);
   localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}
  function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
     window.location = "kwitter.html";
  }


  function updatelike(message_id)
  {
      console.log("click on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
  
   firebase.database().ref(room_name).child(message_id).update({
     like : updated_likes
   });
  
  }
