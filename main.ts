keyboard.kbEvent(KeyValue.keyany, function () {
    Key = keyboard.keyBasic()
    keyboard.setIndexColor(Key, 0x00ff00)
    basic.showNumber(Key)
    basic.pause(100)
    radio.sendNumber(Key)
    keyboard.ledBlank()
})
let Key = 0
radio.setGroup(42)
basic.showIcon(IconNames.Meh)
basic.forever(function () {
	
})
