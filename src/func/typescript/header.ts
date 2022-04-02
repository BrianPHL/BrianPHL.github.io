// * Mobile-view header

const mvNavReveal  = document.querySelector('#mv-nav');
const mvNavConceal = document.querySelector('#mv-nav-close');
const mvNavLogo    = document.querySelector('#mv-logo')
const mvNavPanel   = $('.header-mobile-nav');
let   mvNavState   = false

mvNavReveal.addEventListener('click', () => {

    ( !mvNavState )
    
    ? (
        mvNavPanel.animate({
            'bottom': '0vh'
        }, 100),
        mvNavState = true 
    )
    : (
        console.log('Error has occured in Ln.: 25-39')
    )

})

mvNavConceal.addEventListener('click', () => {

    ( mvNavState ) 

    ? (
        mvNavPanel.animate({
            'bottom': '-200px'
        }, 100),
        mvNavState = false
    )
    : (
        console.log('Error has occured in Ln.: 41-52')
    )
    
})
