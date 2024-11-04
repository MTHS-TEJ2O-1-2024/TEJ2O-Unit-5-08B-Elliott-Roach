/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program turns 90 digres when 10 cm or closer
*/

//setup
let distanceToObject: number = 0
basic.showIcon(IconNames.Happy)

//moving forward until 10 cm away from wall then backing up
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()

    while (distanceToObject >= 0) {

        //moving forward
        while (distanceToObject >= 11) {
        robotbit.StpCarMove(4, 48)
        }

        //moving bakward then turning
        while (distanceToObject <= 10) {
            robotbit.StpCarMove(-4, 48)
            robotbit.StpCarTurn(90, 48, 125)
        }
    }
})

//finding distance forever
basic.forever(function() {
    //finding distance
       distanceToObject = sonar.ping(
        DigitalPin.P15,
        DigitalPin.P14,
        PingUnit.Centimeters,
    )

   basic.showNumber(distanceToObject)
})
