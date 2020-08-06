radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.setVolume(127)
        music.playMelody("B A G A G F A C5 ", 120)
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
})
radio.setGroup(1)
