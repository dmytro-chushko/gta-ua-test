const languages = [
  {
    id: 'ua',
    label: 'Українська',
  },
  {
    id: 'uk',
    label: 'English',
  },
];

class Localization {
  constructor(langBtns, currentLangBox, langListBox) {
    this.currentLang = this.defineInitialLang();
    this.currentLangBox = currentLangBox;
    this.langListBox = langListBox;
    this.langBtns = langBtns;
  }

  setUpLangs() {
    console.log(this.currentLang);
    console.dir(this.currentLangBox);
    console.dir(this.langListBox);
    const { id, label } = this.currentLang;
    this.currentLangBox.innerHTML = `
                <img
                  class="img"
                  src="./assets/images/flag-${id}.png"
                  width="24"
                  height="24"
                  alt="${id.toUpperCase()}"
                />
                <span>${label}</span>`;

    this.langListBox.innerHTML = languages
      .filter(el => el.id !== this.currentLang.id)
      .map(({ id, label }) => {
        return `<li class="localization__item">
                  <img
                    class="img"
                    src="./assets/images/flag-${id}.png"
                    width="24"
                    height="24"
                    alt="${id.toUpperCase()}"
                  />
                  <span>${label}</span>
                </li>`;
      })
      .join('');
  }

  toggleLangMenu() {
    this.langBtns;
  }

  defineInitialLang() {
    return languages.find(
      el => el.id === (JSON.parse(localStorage.getItem('lang')) || 'ua'),
    );
  }
}

export default Localization;
