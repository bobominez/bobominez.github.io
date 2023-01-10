function onload(){
  document.getElementById('okay').style.display = "none";
  document.getElementById('no-way').style.display = "none";
  document.getElementById('h').style.display = "none";
}
function changeOpacity() {
  document.getElementById('scene').classList.add('opacity-low');
  document.getElementById('look').classList.add('bruh');
  document.getElementById('scene').innerHTML = 'P';
  setTimeout("document.getElementById('scene').innerHTML = 'Ps';", 150);
  setTimeout("document.getElementById('scene').innerHTML = 'Pss';", 300);
  setTimeout("document.getElementById('scene').innerHTML = 'Psss';", 450);
  setTimeout("document.getElementById('scene').innerHTML = 'Pssst';", 600);
  setTimeout("document.getElementById('scene').innerHTML = 'Pssst!';", 750);

  setTimeout("document.getElementById('e1').innerHTML = '>>';", 1050);

}
function message1() {
  document.getElementById('e1').style.display = "none";
  document.getElementById('scene').innerHTML = 'C';
  setTimeout("document.getElementById('scene').innerHTML = 'Co';", 150);
  setTimeout("document.getElementById('scene').innerHTML = 'Com';", 300);
  setTimeout("document.getElementById('scene').innerHTML = 'Come';", 450);
  setTimeout("document.getElementById('scene').innerHTML = 'Come ';", 600);
  setTimeout("document.getElementById('scene').innerHTML = 'Come w';", 750);
  setTimeout("document.getElementById('scene').innerHTML = 'Come wi';", 900);
  setTimeout("document.getElementById('scene').innerHTML = 'Come wit';", 1050);
  setTimeout("document.getElementById('scene').innerHTML = 'Come with';", 1200);
  setTimeout("document.getElementById('scene').innerHTML = 'Come with ';", 1350);
  setTimeout("document.getElementById('scene').innerHTML = 'Come with m';", 1500);
  setTimeout("document.getElementById('scene').innerHTML = 'Come with me';", 1650);
  setTimeout("document.getElementById('scene').innerHTML = 'Come with me!';", 1700);
  setTimeout("document.getElementById('okay').style.display = 'block';", 2200);
  setTimeout("document.getElementById('no-way').style.display = 'block';", 2700);
}
function message2() {
  document.getElementById('okay').style.display = "none";
  document.getElementById('no-way').style.display = "none";
  document.getElementById('scene').innerHTML = 'F';
  setTimeout("document.getElementById('scene').innerHTML = 'Fi';", 150);
  setTimeout("document.getElementById('scene').innerHTML = 'Fin';", 300);
  setTimeout("document.getElementById('scene').innerHTML = 'Fine';", 450);
  setTimeout("document.getElementById('scene').innerHTML = 'Fine.';", 600);
  setTimeout("document.getElementById('look').classList.add('yes');", 1111);
  setTimeout("document.getElementById('scene').style.display = 'none';", 2222);
  setTimeout("document.getElementById('h').style.display = 'block';", 5000);

}
