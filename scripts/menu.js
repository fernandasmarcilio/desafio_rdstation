const openMenu = () => {
  const menuNav = document.getElementById("menu");
  const menuButton = document.getElementById("bt-menu");

  const menuList = document.getElementById("menu-list");
  const menuButtonList = document.getElementById("menu-buttons-container");

  if(menuButton.checked) {
    menuNav.style.height = "200px";
    menuList.style.display = "flex";
    menuButtonList.style.display = "flex";
  } else {
    menuNav.style.height = "0";
    menuList.style.display = "";
    menuButtonList.style.display = "";
  }
}