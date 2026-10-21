input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.play(music.stringPlayable("D E F E D E F G ", 120), music.PlaybackMode.LoopingInBackground)
})
basic.forever(function () {
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . .
        # . . . .
        # # . . .
        `)
    basic.pause(25)
    basic.showLeds(`
        . . . . #
        . . . . .
        # . . . .
        # # . . .
        # # # . .
        `)
    basic.pause(25)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        `)
    basic.pause(25)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        `)
    basic.pause(25)
    basic.showLeds(`
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        . # # # #
        `)
    basic.pause(25)
    basic.showLeds(`
        # # # . .
        # # # # .
        # # # # #
        . # # # #
        . . # # #
        `)
    basic.pause(25)
    basic.showLeds(`
        # # # # .
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        `)
    basic.pause(25)
    basic.showLeds(`
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.pause(25)
    basic.showLeds(`
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.pause(25)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . . . #
        . . . . .
        # . . . .
        `)
})
