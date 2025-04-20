keyboard.kbEvent(KeyValue.keyany, function () {
    Guess = keyboard.keyBasic()
    keyboard.setIndexColor(Guess, 0x00ff00)
    basic.pause(100)
    basic.showNumber(Guess)
    if (Guess == Number2) {
        Correct()
    } else if (Guess < Number2) {
        TooLow()
    } else if (Guess > Number2) {
        TooHigh()
    }
})
function TooLow () {
    lcdDisplay.lcdClearAll()
    keyboard.setIndexColor(Guess, 0xff0000)
    keyboard.vibrationMotor(OnOff.ON)
    basic.pause(200)
    keyboard.vibrationMotor(OnOff.OFF)
    lcdDisplay.lcdDisplayText("Too Low!!", 1, 120, 120, lcdDisplay.FontSize.Large, 0xFF0000)
    basic.pause(100)
    keyboard.ledBlank()
    basic.clearScreen()
    lcdDisplay.lcdClearAll()
}
function Reward () {
    for (let index = 0; index < 8; index++) {
        lcdDisplay.lcdSetBgcolor(lcdDisplay.lcdGetRgbColor(randint(0, 255), randint(0, 255), randint(0, 255)))
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    }
    for (let index = 0; index < 16; index++) {
        lcdDisplay.lcdDisplayIamge(1, "/expression icon/happy.png", randint(0, 320), randint(0, 240), randint(1, 2) * 256)
        lcdDisplay.lcdRotateIamge(1, randint(0, 359))
        basic.pause(100)
    }
    lcdDisplay.lcdClearAll()
    lcdDisplay.lcdDisplayIamge(2, "/expression icon/funny.png", randint(0, 320), randint(0, 240), 512)
    basic.pause(1000)
    lcdDisplay.lcdSetBgIamge("frank2_320x240.png")
}
input.onButtonPressed(Button.A, function () {
    lcdDisplay.lcdSetBgcolor(0xffffff)
    basic.clearScreen()
    keyboard.ledBlank()
    lcdDisplay.lcdClearAll()
    lcdDisplay.lcdDisplayText("Enter your guess on Keypad", 1, 10, 10, lcdDisplay.FontSize.Large, 0x0000ff)
    Number2 = randint(0, 9)
})
function TooHigh () {
    lcdDisplay.lcdClearAll()
    keyboard.setIndexColor(Guess, 0xff0000)
    keyboard.vibrationMotor(OnOff.ON)
    basic.pause(200)
    keyboard.vibrationMotor(OnOff.OFF)
    lcdDisplay.lcdDisplayText("Too High!!", 1, 120, 120, lcdDisplay.FontSize.Large, 0xFF0000)
    basic.pause(100)
    basic.clearScreen()
    keyboard.ledBlank()
    lcdDisplay.lcdClearAll()
}
function Correct () {
    lcdDisplay.lcdDisplayText("YOU GOT IT!!!", 1, 120, 120, lcdDisplay.FontSize.Large, 0xFF0000)
    for (let index = 0; index < 16; index++) {
        basic.pause(100)
        keyboard.ledRainbow(
        0,
        15,
        1,
        360
        )
        basic.pause(100)
        keyboard.ledBlank()
    }
    keyboard.ledBlank()
    basic.clearScreen()
    Reward()
}
let Number2 = 0
let Guess = 0
basic.showIcon(IconNames.Happy)
keyboard.vibrationMotor(OnOff.OFF)
keyboard.ledBlank()
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
lcdDisplay.lcdSetBgcolor(0xffffff)
lcdDisplay.lcdDisplayText("Guess The number 0-9", 1, 20, 10, lcdDisplay.FontSize.Large, 0xFF0000)
basic.pause(100)
lcdDisplay.lcdDisplayText("Press A to begin", 2, 60, 60, lcdDisplay.FontSize.Large, 0xFF0000)
