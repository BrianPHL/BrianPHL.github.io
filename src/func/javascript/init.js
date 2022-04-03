var themeState = "";
const themePrefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const mvThemeToggle = document.querySelector('#mv-theme');
const setThemeDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    // mvThemeToggle.className = 'fi fi-rr-sun'
    // mvNavLogo.setAttribute("src", "/src/assets/dm-logo.svg")
    localStorage.setItem("data-theme", "dark");
    themeState = "dark";
};
const setThemeLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    // mvThemeToggle.className = 'fa-solid fa-moon'
    // mvNavLogo.setAttribute("src", "/src/assets/lm-logo.svg")
    localStorage.setItem("data-theme", "light");
    themeState = "light";
};
const checkPrefers = () => {
    const savedTheme = localStorage.getItem('data-theme');
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (!savedTheme) {
        if (themePrefers) {
            setThemeDark();
        }
        else {
            setThemeLight();
        }
    }
    else {
        if (savedTheme == 'dark') {
            setThemeDark();
        }
        else {
            setThemeLight();
        }
    }
};
checkPrefers();
