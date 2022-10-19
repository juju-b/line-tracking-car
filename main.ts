basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.lightLevel() < 20) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 255)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 255)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    }
    basic.pause(1000)
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50, 25)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(25, 50)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(50, 50)
    }
})
