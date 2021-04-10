function addUser(){

    console.log("the button works");
    player1_name= document.getElementById("player1_name").value;
    player2_name= document.getElementById("player2_name").value;
    window.location = "html2.html";
    localStorage.setItem("player1name",player1_name);
    localStorage.setItem("player2name",player2_name);

}