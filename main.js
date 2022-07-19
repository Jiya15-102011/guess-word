function c(){
    r=document.getElementById("a").value;
    j=document.getElementById("b").value;
    localStorage.setItem("Player1",r);
    localStorage.setItem("Player2",j);
    window.location="game_page.html";
}