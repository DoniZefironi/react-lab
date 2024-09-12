import './App.css';
import translation from './translations.json';
const Header = () => {
  const toggleLanguage = () => {
      // Логика для переключения языка
      var translations = {};

function loadTranslations() {
  return fetch('translations.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
    })
    .catch(error => console.error('Error loading translations:', error));
}

function toggleLanguage() {
  var currentLanguage = document.documentElement.lang || 'en';
  localStorage.setItem('language','en');
  if (currentLanguage === 'en') {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('languageButton').textContent = 'Русский';
    localStorage.setItem('language','ru');
  } else {
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('languageButton').textContent = 'English';
    localStorage.setItem('language','en');
  }
}

function applyTranslations(lang) {
  var translation = translations[lang];

  var elements = document.querySelectorAll('[id]');
  elements.forEach(function(element) {
    var translationKey = element.getAttribute('id');
    if (translationKey && translation[translationKey]) {
      element.innerHTML = translation[translationKey];
    }
  });
}

loadTranslations().then(() => {
  var userLanguage = navigator.language.substr(0, 2); 
  if (localStorage.getItem('language')==='en') {
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('languageButton').textContent = 'English';
    
  } else {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('languageButton').textContent = 'Русский';
  }
});
  };

  const toggleTheme = () => {
      // Логика для переключения темы
      var themeButton = document.getElementById("themeButton");
  var body = document.body;
  var honest = document.getElementsByClassName("honest");

function toggleTheme() {
  localStorage.setItem('body-theme','light')
body.classList.toggle("dark");
if (body.classList.contains("dark")) {
  localStorage.setItem('body-theme','dark')
} else {
  localStorage.setItem('body-theme','light')
}

}
if (localStorage.getItem('body-theme') === 'dark')
    {
      body.classList.toggle("dark");
    }
    else{
      body.classList.remove("dark");
    }

  };

  return (
      <header>
          <a className="ah1a" href="/glav/index.html">WAYGOOD</a>
          <div className="burger-menu" id="burgerMenu">
              <span></span>
              <span></span>
              <span></span>
          </div>
          <div className="header-block1" id="headerBlock">
              <nav className="header-nav">
                  <a href="#place" id="home">{translation.home}</a>
                  <a href="#gheter" id="about">{translation.about}</a>
                  <a href="#themenu" id="menus"></a>
                  <a href="#honest" id="drinkmenu"></a>
                  <a href="#diners" id="contact"></a>
                  <a href="#neigh" id="vauncher"></a>
                  <a href="#bookin" id="reserv"></a>
                  <button className="block-sign" id="languageButton" onClick={toggleLanguage}>English</button>
                  <button className="block-sign" id="themeButton" onClick={toggleTheme}>Переключить тему</button>
                  <button className="block-sign" id="sign"></button>
                  <button className="block-sign" id="aut"></button>
                  <span id="usernameDisplay" style={{ display: 'none' }}></span>
                  <button className="block-sign" id="logout" style={{ display: 'none' }}>Logout</button>
              </nav>
          </div>
      </header>
  );
};

export default Header;
