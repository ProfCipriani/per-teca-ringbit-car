input.onButtonPressed(Button.A, function () {
    on = 1
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    on = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let on = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    if (on == 1) {
        RingbitCar.forward()
        basic.pause(500)
        RingbitCar.turnright()
        basic.pause(500)
    } else if (on == 0) {
        RingbitCar.freestyle(0, 0)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
})
