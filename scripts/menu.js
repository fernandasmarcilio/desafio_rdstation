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

const openSubmenu = (element) => {
  const submenuElement = document.getElementById(`submenu-${element.id}`);

  if(submenuElement.style.visibility === 'hidden' || submenuElement.style.visibility === '') {
    submenuElement.style.visibility = "visible";
    submenuElement.style.opacity = 1;
  }else {
    submenuElement.style.visibility = "hidden";
    submenuElement.style.opacity = 0;
    containerElement.style.maxHeight = "500px";
  }
}

const closeSubmenu = (element) => {
  const submenuElement = document.getElementById(`submenu-${element.id}`);
  submenuElement.style.visibility = "hidden";
  submenuElement.style.opacity = 0;
}

document.getElementById('submenu-02').addEventListener("click", (event) => {
  event.stopPropagation();
})
