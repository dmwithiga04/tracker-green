def on_received_number(receivedNumber):
    if receivedNumber == 1:
        radio.send_number(2)
        music.set_volume(255)
        music.start_melody(music.built_in_melody(Melodies.RINGTONE), MelodyOptions.ONCE)
        pins.digital_write_pin(DigitalPin.P2, 1)
    if receivedNumber == 3:
        music.stop_melody(MelodyStopOptions.ALL)
        pins.digital_write_pin(DigitalPin.P2, 0)
radio.on_received_number(on_received_number)

radio.set_group(1)
radio.set_transmit_power(1)