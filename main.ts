/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program turns 90 digres when 10 cm or closer
*/

let distanceToObject: number = 0


//clearing
basic.showIcon(IconNames.Happy)

//moving forward until 10 cm away from wall
input.onButtonPressed(Button.A, function() {
    while (distanceToObject > 10) {
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
    }
    if (distanceToObject < 10) {
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B0)
}

        if (distanceToObject < 10)  ({

            //turning 90 degrees
           
    })

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

basic.showNumber(distanceToObject)