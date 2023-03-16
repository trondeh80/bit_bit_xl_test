input.onSound(DetectedSound.Loud, function () {
    music.playTone(175, music.beat(BeatFraction.Whole))
    while (true) {
        distanceInCm = bitbot.sonar(BBPingUnit.Centimeters)
        if (distanceInCm > 8) {
            bitbot.goms(BBDirection.Forward, 60, 400)
        } else {
            bitbot.rotatems(BBRobotDirection.Left, 60, 200)
        }
    }
})
let distanceInCm = 0
basic.showLeds(`
    # # # # #
    . . # . .
    . . # # #
    . . # . .
    . . # # #
    `)
basic.forever(function () {
	
})
