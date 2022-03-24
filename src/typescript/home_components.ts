const iconsComponent = $('.homeIcon')
let   iconsCount     = 0
let   iconsStart     = 1

const iconsTable     = [
    '👋', '😊', '🌊', 
    '👍', '🤙', '💅', 
    '😘', '❤️', '🙏'

]


function iconsCycle() {

    let iconsIndex = (iconsStart + iconsCount) % iconsTable.length;
    iconsCount++

    iconsComponent.html(iconsTable[iconsIndex])

}

setInterval(iconsCycle, 2000)