var themeState = "";
const themePrefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
const setThemeDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem("data-theme", "dark");
    themeState = "dark";
};
const setThemeLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
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
