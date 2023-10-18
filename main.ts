input.onButtonPressed(Button.A, function () {
    temperatura = !(temperatura)
    if (temperatura) {
        basic.showIcon(IconNames.Rollerskate)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let temperatura = false
temperatura = false
loops.everyInterval(6000, function () {
    if (temperatura) {
        datalogger.log(datalogger.createCV("temp", input.temperature()))
        datalogger.log(datalogger.createCV("luz", input.lightLevel()))
    }
})
