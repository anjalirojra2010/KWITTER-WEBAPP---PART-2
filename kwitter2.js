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