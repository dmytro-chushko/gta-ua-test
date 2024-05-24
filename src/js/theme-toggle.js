class ThemeToggle {
  constructor(lightModeBtn, darkModeBtn) {
    this.isDarkMode = true;
    this.lightModeBtn = lightModeBtn;
    this.darkModeBtn = darkModeBtn;
  }

  toggleTheme(e) {
    const { dataset } = e.target.closest('button');

    if ('dark_mode' in dataset && !this.isDarkMode) {
      this.setDarkMode();
      this.isDarkMode = true;
      localStorage.setItem('isDarkMode', JSON.stringify(true));
    }

    if ('light_mode' in dataset && this.isDarkMode) {
      this.setLightMode();
      this.isDarkMode = false;
      localStorage.setItem('isDarkMode', JSON.stringify(false));
    }

    document.body.classList.toggle('dark-mode');
  }

  setInitialTheme() {
    const initialTheme = JSON.parse(localStorage.getItem('isDarkMode'));

    if (initialTheme === null) return;
    if (initialTheme && document.body.classList.contains('dark-mode')) return;
    if (initialTheme && !document.body.classList.contains('dark-mode')) {
      document.body.classList.add('dark-mode');
      this.isDarkMode = true;
      this.setDarkMode();
    } else {
      document.body.classList.remove('dark-mode');
      this.isDarkMode = false;
      this.setLightMode();
    }
  }

  setDarkMode() {
    this.darkModeBtn.classList.add('theme-toggle__button--current');
    this.lightModeBtn.classList.remove('theme-toggle__button--current');
  }

  setLightMode() {
    this.lightModeBtn.classList.add('theme-toggle__button--current');
    this.darkModeBtn.classList.remove('theme-toggle__button--current');
  }
}

export default ThemeToggle;
