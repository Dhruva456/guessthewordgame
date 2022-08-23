player1name = localStorage.getItem("player1key");
player2name = localStorage.getItem("player2key");
player1score = 0;
player2score = 0;
document.getElementById("player1name").innerHTML = player1name + ":";
document.getElementById("player2name").innerHTML = player2name + ":";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerquestion").innerHTML =
  "question turn:" + player1name;
document.getElementById("playeranswer").innerHTML =
  "answer turn:" + player2name;

function send() {
  getword = document.getElementById("word").value;
  word = getword.toLowerCase();
  console.log("wordinLowercase=" + word);
  char1 = word.charAt(1);
  console.log(char1);
  position = Math.floor(word.length / 2);
  char2 = word.charAt(position);
  console.log(char2);
  char3 = word.charAt(word.length - 1);
  console.log(char3);
  u1 = word.replace(char1, "_");
  u2 = u1.replace(char2, "_");
  u3 = u2.replace(char3, "_");
  console.log(u3);
  question = "<h3>q." + u3 + "</h3>";
  input_box = "<br>answer:<input id='input_box'>";
  button =
    "<br><br> <button class='btn btn-info' onclick='check()'> check</button>";
  document.getElementById("output").innerHTML = question + input_box + button;
  document.getElementById("word").value = "";
}
Q_turn = "player1";
A_turn = "player2";
function check() {
  getanswer = document.getElementById("input_box").value;
  answer = getanswer.toLowerCase();
  console.log(answer);
  if (answer == word) {
    if (A_turn == "player1") {
      player1score = player1score + 1;
      document.getElementById("player1score").innerHTML = player1score;
    } else {
      player2score = player2score + 1;
      document.getElementById("player2score").innerHTML = player2score;
    }
  }
  if (Q_turn == "player1") {
    Q_turn = "player2";
    document.getElementById("playerquestion").innerHTML =
      "question turn:" + player2name;
  } else {
    Q_turn = "player1";
    document.getElementById("playerquestion").innerHTML =
      "question turn:" + player1name;
  }
  if (A_turn == "player1") {
    A_turn = "player2";
    document.getElementById("playeranswer").innerHTML =
      "answer turn:" + player2name;
  } else {
    A_turn = "player1";
    document.getElementById("playeranswer").innerHTML =
      "answer turn:" + player1name;
  }
  document.getElementById("output").innerHTML = "";
}
