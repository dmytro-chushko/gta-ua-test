import flagUa from '../assets/images/flag-ua.png';
import flagUk from '../assets/images/flag-uk.png';

const languages = [
  {
    id: 'ua',
    label: 'Українська',
    flagImg: flagUa,
  },
  {
    id: 'uk',
    label: 'English',
    flagImg: flagUk,
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
    const { id, label, flagImg } = this.currentLang;

    this.currentLangBox.innerHTML = `
                <img
                  class="img"
                  src="${flagImg}"
                  width="24"
                  height="24"
                  alt="${id.toUpperCase()}"
                />
                <span>${label}</span>`;

    this.langListBox.innerHTML = languages
      .filter(el => el.id !== this.currentLang.id)
      .map(({ id, label, flagImg }) => {
        return `<li class="localization__item" data-lang="${id}">
                  <button class="localization__button" type="button">
                    <img
                      class="img"
                      src="${flagImg}"
                      width="24"
                      height="24"
                      alt="${id.toUpperCase()}"
                    />
                    <span>${label}</span>
                  </button>                  
                </li>`;
      })
      .join('');
  }

  toggleLangMenu() {
    this.langListBox.classList.toggle('localization__list--hidden');
  }

  setCurrentLang(e) {
    const langId = e.target.closest('li').dataset.lang;

    this.currentLang = languages.find(el => el.id === langId);
    localStorage.setItem('lang', JSON.stringify(langId));
    this.setUpLangs();
    this.toggleLangMenu();
  }

  defineInitialLang() {
    return languages.find(
      el => el.id === (JSON.parse(localStorage.getItem('lang')) || 'ua'),
    );
  }
}

export default Localization;
