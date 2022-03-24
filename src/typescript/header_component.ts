const headerComponent = $('.header')
let lastScrollTop     = 0

$(() => {
    
    
    $( window ).on('scroll', function() {
        
        let initialScrollTop = $(this).scrollTop();
        
        if ( initialScrollTop > lastScrollTop && lastScrollTop > 0 ) {
            
            console.log('DOWN')
            headerComponent.css({'top': '-8vh'})

        } else {
            
            console.log('UP')
            headerComponent.css({'top': '0vh'})

        }

        lastScrollTop = initialScrollTop;

    })

    $('#setLightmode').on('click', () => {

        alert('This feature is not yet available but will be shipped soon enough.')

    })

})


