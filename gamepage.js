question_turn="Player1";
answer_turn="Player2";
Player1name=localStorage.getItem("Player1");
Player2name=localStorage.getItem("Player2");
document.getElementById("Player1").innerHTML=Player1name;
document.getElementById("Player2").innerHTML=Player2name;
P1score=0;
P2score=0;
document.getElementById("P1Score").innerHTML=P1score;
document.getElementById("P2Score").innerHTML=P2score;
document.getElementById("Qchance").innerHTML="Question Turn -"+Player1name;
document.getElementById("Achance").innerHTML="Answer Turn -"+Player2name;
function send(){
    firstnumber=document.getElementById("number1").value;
    twonumber=document.getElementById("number2").value;
    actual_number=parseInt(firstnumber)*parseInt(twonumber);
    question_number="<h4>"+firstnumber+"X"+twonumber+"</h4>";
    input_box="<br>Answer:<input type='text' id='input_checkbox'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
}
function check(){
    get_answer=document.getElementById("input_checkbox").value;
    if (get_answer==actual_number){
        if (answer_turn=="Player1"){
            P1score=P1score+1;
            document.getElementById("P1Score").innerHTML=P1score;
        }
        else {
            P2score=P2score+1;
            document.getElementById("P2Score").innerHTML=P2score; 
        }
    }
    else {
        if (answer_turn=="Player1"){
            P1score=P1score-1;
            document.getElementById("P1score").innerHTML=P1score;
        }
        else {
            P2score=P2score-1;
            document.getElementById("P2score").innerHTML=P2score; 
        }
    }
    if (question_turn=="Player1"){
        question_turn="Player2";
        document.getElementById("Qchance").innerHTML="Question Turn-"+question_turn;
    }
    if (question_turn=="Player2"){
        question_turn="Player1";
        document.getElementById("Qchance").innerHTML="Question Turn-"+question_turn;
    }
    if (answer_turn=="Player1"){
        answer_turn="Player2";
        document.getElementById("Achance").innerHTML="Answer Turn-"+answer_turn;
    }
    if (answer_turn=="Player2"){
        answer_turn="Player1";
        document.getElementById("Achance").innerHTML="Answer Turn-"+answer_turn;
    }
    document.getElementById("output").value="";
}