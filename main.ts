radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        radio.setTransmitPower(1)
        radio.sendNumber(2)
        music.setVolume(255)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
    }
    if (receivedNumber == 3) {
        music.stopMelody(MelodyStopOptions.All)
    }
})
radio.setGroup(1)
