keyboard.kbEvent(KeyValue.keyany, function () {
    Guess = keyboard.keyBasic()
    keyboard.setIndexColor(Guess, 0x00ff00)
    basic.showNumber(Guess)
    basic.pause(100)
    keyboard.ledBlank()
    if (Guess == Number2) {
        Correct()
    } else if (Guess < Number2) {
        TooLow()
    } else if (Guess > Number2) {
        TooHigh()
    }
})
function TooLow () {
    keyboard.vibrationMotor(OnOff.ON)
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    lcdDisplay.lcdClearAll()
    lcdDisplay.lcdDisplayText("Enter your guess on Keypad", 1, 10, 10, lcdDisplay.FontSize.Large, 0x0000ff)
    Number2 = randint(0, 9)
})
function TooHigh () {
    keyboard.vibrationMotor(OnOff.ON)
    basic.pause(1000)
}
function Correct () {
	
}
let Number2 = 0
let Guess = 0
basic.showIcon(IconNames.Yes)
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
lcdDisplay.lcdSetBgcolor(0xffffff)
lcdDisplay.lcdDisplayText("Guess The number 1-9", 1, 20, 10, lcdDisplay.FontSize.Large, 0xFF0000)
basic.pause(100)
lcdDisplay.lcdDisplayText("Press A to begin", 2, 60, 60, lcdDisplay.FontSize.Large, 0xFF0000)
