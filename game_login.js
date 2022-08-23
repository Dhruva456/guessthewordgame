function adduser(){
    player1name=document.getElementById("player1_input").value
    player2name=document.getElementById("player2_input").value
    localStorage.setItem("player1key",player1name)
    localStorage.setItem("player2key",player2name)
    window.location="game_page.html"

}