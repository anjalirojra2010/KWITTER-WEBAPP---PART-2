// ADD YOUR FIREBASE LINKS HERE
function add()
{
      var Room_name = document.getElementById("room_name").value;
      

      firebase.database().ref("/").child(Room_name).update({
            Purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

// Get your firebase links
function getData() 
{
      // Get the database service for the default app 
      var defaultDatabase = firebase.database(); 
      defaultDatabase.ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  var childKey  = childSnapshot.key;
                  var Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class= 'room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
            });
      });
}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

