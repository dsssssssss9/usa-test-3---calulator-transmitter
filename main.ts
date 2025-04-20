let Key = 0
keyboard.kbEvent(KeyValue.keyany, function () {
    Key = keyboard.keyBasic()
    keyboard.setIndexColor(Key, 0x00ff00)
    basic.showNumber(Key)
    basic.pause(100)
    keyboard.ledBlank()
})
basic.forever(function () {
	
})
