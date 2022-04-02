// * Mobile-view header
const mvNavReveal = document.querySelector('#mv-nav');
const mvNavConceal = document.querySelector('#mv-nav-close');
const mvNavLogo = document.querySelector('#mv-logo');
const mvNavPanel = $('.header-mobile-nav');
let mvNavState = false;
mvNavReveal.addEventListener('click', () => {
    (!mvNavState)
        ? (mvNavPanel.animate({
            'bottom': '0vh'
        }, 100),
            mvNavState = true)
        : (console.log('Error has occured in Ln.: 25-39'));
});
mvNavConceal.addEventListener('click', () => {
    (mvNavState)
        ? (mvNavPanel.animate({
            'bottom': '-200px'
        }, 100),
            mvNavState = false)
        : (console.log('Error has occured in Ln.: 41-52'));
});
let themeState = "";
const themePrefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
const mvThemeToggle = document.querySelector('#mv-theme');
const themeDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    mvThemeToggle.className = 'fi fi-rr-sun';
    mvNavLogo.setAttribute("src", "/src/assets/dm-logo.svg");
};
const themeLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    mvThemeToggle.className = 'fa-solid fa-moon';
    mvNavLogo.setAttribute("src", "/src/assets/lm-logo.svg");
};
const checkPrefers = () => {
    (themePrefers)
        ? (themeDark(),
            themeState = "dark")
        : (themeLight(),
            themeState = "light");
};
checkPrefers();
mvThemeToggle.addEventListener('click', () => {
    (themeState == 'light')
        ? (themeDark(),
            themeState = "dark")
        : (themeLight(),
            themeState = "light");
});
