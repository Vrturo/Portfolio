$( function() {

    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        verticalCentered: false,
        scrollingSpeed: 500,
        css3: true

    });


    $( '.anim-typewriter' ).teletype({
        text: [ " HACK.HACK.HACK.HACK.^900~20Art's Front End Labz." ],
        typeDelay: 0,
        backDelay: 0,
        cursor: '▋',
        loop: 1,
        preserve: true
    })
});
