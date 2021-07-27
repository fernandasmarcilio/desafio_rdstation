const openMenu = () => {
  const menuNav = document.getElementById("menu");
  const menuButton = document.getElementById("bt-menu");

  const menuList = document.getElementById("menu-list");
  const menuButtonList = document.getElementById("menu-buttons-container");

  const closeMenuIcon = document.getElementById("close-menu-icon");
  const menuIcon = document.getElementById("menu-icon");


  if(menuButton.checked) {
    menuNav.style.maxHeight = "500px";
    menuList.style.display = "flex";
    menuButtonList.style.display = "flex";
    closeMenuIcon.style.opacity = 1;
    menuIcon.style.opacity = 0;
  } else {
    menuNav.style.maxHeight = "0";
    menuList.style.display = "";
    menuButtonList.style.display = "";
    closeMenuIcon.style.opacity = 0;
    menuIcon.style.opacity = 1;
  }
}