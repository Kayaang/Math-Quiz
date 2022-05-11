function addUser(){
    P1name=document.getElementById("P1").value;
    P2name=document.getElementById("P2").value;
    localStorage.setItem("Player1",P1name);
    localStorage.setItem("Player2",P2name);
    window.location="gamepage.html";  
}