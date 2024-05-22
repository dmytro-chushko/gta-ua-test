// import '@babel/polyfill';
import './index.html';
import './index.scss';
import Localization from './js/localization';
import './js/mobile-menu';
import MobileMenu from './js/mobile-menu';
import refs from './js/refs';
import ThemeToggle from './js/theme-toggle';

(function start() {
  const mobileMenu = new MobileMenu(refs.menuContainer);
  const themeToggle = new ThemeToggle(refs.lightModeBtn, refs.darkModeBtn);
  const localization = new Localization(
    refs.langBtns,
    refs.currentLangBox,
    refs.langListBox,
  );

  themeToggle.setInitialTheme();
  localization.setUpLangs();

  refs.menuBtns.forEach(el =>
    el.addEventListener('click', mobileMenu.toggleMenu.bind(mobileMenu)),
  );
  refs.themeToggleBtns.forEach(el =>
    el.addEventListener('click', themeToggle.toggleTheme.bind(themeToggle)),
  );
})();
