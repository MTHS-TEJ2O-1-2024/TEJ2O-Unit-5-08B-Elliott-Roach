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
    basic.clearScreen()
    //moving forward
    while (distanceToObject >= 11) {
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
    }
    //reversing and terning
    if (distanceToObject < 10) {
        
        //reversing
        robotbit.StepperDegree(robotbit.Steppers.M1, -360)
        robotbit.StepperDegree(robotbit.Steppers.M2, -360)

        //turning
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B0)
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
