keyboard.kbEvent(KeyValue.keyany, function () {
    Key = keyboard.keyBasic()
    keyboard.setIndexColor(Key, 0x00ff00)
    basic.showNumber(Key)
    basic.pause(100)
    keyboard.ledBlank()
})
input.onButtonPressed(Button.A, function () {
    lcdDisplay.lcdClearAll()
    lcdDisplay.lcdDisplayText("Enter your guess on Keypad", 1, 20, 10, lcdDisplay.FontSize.Large, 0x0000ff)
})
let Key = 0
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
lcdDisplay.lcdSetBgcolor(0xffffff)
lcdDisplay.lcdDisplayText("Guess The number 1-9", 1, 20, 10, lcdDisplay.FontSize.Large, 0xFF0000)
basic.pause(100)
lcdDisplay.lcdDisplayText("Press A to begin", 2, 60, 60, lcdDisplay.FontSize.Large, 0xFF0000)
