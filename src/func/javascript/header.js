const navPanel = $('.header-navPanel');
const reveal = $('#reveal-navPanel');
const conceal = $('#conceal-navPanel');
$(reveal).on('click', _ => {
    console.log('1');
    navPanel.animate({
        'margin-right': '0%'
    }, 300);
});
$(conceal).on('click', _ => {
    console.log('2');
    navPanel.animate({
        'margin-right': '-100%'
    }, 300);
});
