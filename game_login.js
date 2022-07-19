
p=localStorage.getItem("Player1");
pn=localStorage.getItem("Player2");

p1score=0;
p2score=0;
console.log(p);
document.getElementById("player1_name").innerHTML = p + " : ";
document.getElementById("player2_name").innerHTML = pn + " : ";

document.getElementById("player1_score").innerHTML=p1score;
document.getElementById("player2_score").innerHTML=p2score;

document.getElementById("q").innerHTML="Question turn : "+p;
document.getElementById("a").innerHTML="Answer turn : "+pn;

function c(){
    z=document.getElementById("w").value;
z1=z.toLowerCase();
console.log(z1);

first=z1.charAt(1);
console.log(first);

l=Math.floor(z1.length/2);
second=z1.charAt(l);
console.log(second);

m=z1.length-1;
last=z1.charAt(m);
console.log(last);



r1=z1.replace(first,"_");
r2=r1.replace(second,"_");
r3=r2.replace(last,"_");
console.log(r3);

question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("w").value = "";
}
questionturn="player1";
answerturn="player2";

function check(){
    e=document.getElementById("input_check_box").value;
    i=e.toLowerCase();
    console.log(i);
     
    if(z1 == i){
           if(answerturn == "player1"){
               p1score=p1score+1;
               document.getElementById("player1_score").innerHTML=p1score;
           }
           else {
            p2score=p2score+1;
            document.getElementById("player2_score").innerHTML=p2score;
           }
    }

    if(questionturn == "player1"){
     questionturn="player2";
     document.getElementById("q").innerHTML="Question turn : "+pn;
    }
    else{
        questionturn="player1";
        document.getElementById("q").innerHTML="Question turn : "+p;  
    }

    if(answerturn == "player1"){
        answerturn="player2";
        document.getElementById("a").innerHTML="Answer turn : "+pn;
       }
       else{
           answerturn="player1";
           document.getElementById("a").innerHTML="Answer turn : "+p;  
       }
       document.getElementById("output").innerHTML="";
}