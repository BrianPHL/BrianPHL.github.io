// * Mobile-view header

const mvNavReveal  = document.querySelector('#mv-nav');
const mvNavConceal = document.querySelector('#mv-nav-close');
const mvNavLogo    = document.querySelector('#mv-logo');
const mvNavPanel   = <HTMLElement>document.querySelector('.header-mobile-nav');
let   mvNavState   = false

mvNavReveal.addEventListener('click', () => {

    ( !mvNavState )
    
        ? (
            mvNavPanel.style.bottom = "0%",
            mvNavState = true 
        )

        : (
            console.log('Error has occured in Ln.: 25-39')
        )

})

mvNavConceal.addEventListener('click', () => {

    ( mvNavState ) 

        ? (
            mvNavPanel.style.bottom = "-50%",
            mvNavState = false
        )

        : (
            console.log('Error has occured in Ln.: 41-52')
        );
    
})

const mvThemeToggle = document.querySelector('#mv-theme');

const toggleThemeDark = () => {

    document.documentElement.setAttribute('data-theme', 'dark')
    mvThemeToggle.className = 'fi fi-rr-sun'
    mvNavLogo.setAttribute("src", "/src/assets/dm-logo.svg")
    localStorage.setItem("data-theme", "dark")
    themeState = "dark"

}

const toggleThemeLight = () => {

    document.documentElement.setAttribute('data-theme', 'light')
    mvThemeToggle.className = 'fa-solid fa-moon'
    mvNavLogo.setAttribute("src", "/src/assets/lm-logo.svg")
    localStorage.setItem("data-theme", "light")
    themeState = "light"

}

const checkTheme = () => {

    const savedTheme = localStorage.getItem('data-theme');

    ( savedTheme == 'dark' )
        
        ? (
            mvThemeToggle.className = 'fi fi-rr-sun',
            mvNavLogo.setAttribute("src", "/src/assets/dm-logo.svg")
        )

        : (
            mvThemeToggle.className = 'fa-solid fa-moon',
            mvNavLogo.setAttribute("src", "/src/assets/lm-logo.svg")
        )

}
checkTheme()

mvThemeToggle.addEventListener('click', () => {
    
    ( themeState == 'dark' )

        ? (
            toggleThemeLight()
        )
        
        : (
            toggleThemeDark()
        );

})
