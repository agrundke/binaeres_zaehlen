let Tastendrücke: number[] = []
input.onGesture(Gesture.Shake, function () {
    for (let Index = 0; Index <= 4; Index++) {
        basic.showNumber(Tastendrücke[Index])
    }
})
input.onButtonPressed(Button.AB, function () {
    Tastendrücke = []
    basic.clearScreen()
    while (Tastendrücke.length < 3) {
        if (input.buttonIsPressed(Button.A)) {
            Tastendrücke.push(0)
            while (input.buttonIsPressed(Button.A)) {
                basic.showNumber(0)
            }
        } else {
            if (input.buttonIsPressed(Button.B)) {
                Tastendrücke.push(1)
                while (input.buttonIsPressed(Button.B)) {
                    basic.showNumber(1)
                }
            }
        }
        basic.clearScreen()
    }
})
