class MobileMenu {
  constructor(menuContainer) {
    this.menuContainer = menuContainer;
  }

  toggleMenu(e) {
    this.menuContainer.classList.toggle('menu-container--is-hidden');
  }
}

export default MobileMenu;
