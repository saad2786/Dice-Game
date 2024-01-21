let player_1 = Math.floor(Math.random() * 6 + 1);
let player_img1 = 'images/dice' + player_1 + '.png';
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", player_img1);
let player_2 = Math.floor(Math.random() * 6 + 1);
let player_img2 = "images/dice" + player_2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", player_img2);

if (player_1 >= player_2) {
  if (player_1 == player_2) {
    document.querySelector('.result').innerHTML = 'Tied!🏳️';
  } else {
    document.querySelector('.result').innerHTML = '🚩 Player 1 won';
  }
} else {
  document.querySelector('.result').innerHTML = 'Player 2 won 🚩';
}
