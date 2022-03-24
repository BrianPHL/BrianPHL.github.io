const headerComponent = $('.header')
const headerBorder    = '1px solid #1E1E1E'
let   scrollPos       = 0

const initialState = [
    'transparent',
    '1px solid transparent'
]

const activeState = [
    '#101010',
    '1px solid #1E1E1E'
]

$(() => {

    $(document).on('scroll', function() {
        
        scrollPos = window.scrollY

        if ( scrollPos > 100 ) {

            headerComponent.css({

                'background-color': activeState[0],
                'border-bottom': activeState[1] 

            })

        } else {

            headerComponent.css({

                'background-color': initialState[0],
                'border-bottom': initialState[1]

            })

        }

    })

    $('#setLightmode').on('click', () => {

        alert('This feature is not yet available but will be shipped soon enough.')

    })

})
