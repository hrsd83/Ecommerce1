function toggleDarkLight() {
  var body = document.getElementById('body');
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  // body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

}


function myTarjetas() {
  const tarjetas = document.getElementById('items')
  tarjetas.classList.add('magictime', 'spaceInDown')
 
}
setInterval(myTarjetas, 500);

