window.lastMdField='md2';
window.inhibitScrollMenu = 0;

function menuOff() {
  window.inhibitScrollMenu = 1;
  var m = document.getElementById("header_menu");
  var b = document.getElementById("menu_button");
  var window_top = window.scrollY;
  m.style.display = 'none';
  b.classList.remove('button_rotate');
  console.log("menuOff");
}

function menuOn() {
  window.inhibitScrollMenu = 1;
  var m = document.getElementById("header_menu");
  var b = document.getElementById("menu_button");
  var window_top = window.scrollY;
  m.style.display = 'block';
  b.classList.add('button_rotate');
}

function toggleMenu() {
  var m = document.getElementById("header_menu");
  if (m.style.display == "" || m.style.display == 'block') {
    menuOff();
  } else {
    menuOn();
  }
}

function stickMenu() {
  if (window.inhibitScrollMenu) {
    window.inhibitScrollMenu = 0;
    return;
  }
  var m = document.getElementById("header_menu");
  var s = document.getElementById("menu_spacer");
  var t = document.getElementById("top_button");
  var h = document.getElementById('header');
  var window_top = window.scrollY;
  if (window_top > 125) {
    m.classList.add('menu_stick');
    t.style.display = 'block';
  } else {
    m.classList.remove('menu_stick');
    if (m.style.display == 'none') {
      menuOn();
    }
    t.style.display = 'none';
  }
}

window.addEventListener('scroll', stickMenu);
stickMenu();
