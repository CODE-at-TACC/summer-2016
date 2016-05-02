# Components

Your robot consists of several major systems that might have several parts belonging to the same system. 

_*Try This:*_

Try to identify the part or parts of a robot that might make up the robotics systems listed below. It's okay if you don't know what a system is - try to come up with a definition for it and make your best effort.

- Chassis
- Drive Train
- Drive Control
- Logic System
- Power System

_*Some Questions:*_

- What definitions did you use to make your selections? 
- What do you think these systems might do? 
- What prior knowledge did you have that helped you decide which system a part belonged to? 
- What might have made a part difficult to classify?

* TODO: YouTube on systems of a robot *

_*Chassis*_

This is the frame on which the robot is built. It may have moving parts, like the swivel caster at the front of the robot. It is completely mechanical - nothing is powered.

_*Drive Train*_

Your robot is driven with two 5 volt motors, bolted to the chassis with wheels. The drive train for a robot is typically considered anything that translates electric energy to mechanical energy. There are many types of _actuators_ that can be used for robots. Common ones are:

- [Servo Motors](https://en.wikipedia.org/wiki/Servomotor)
- [Stepper Motors](https://en.wikipedia.org/wiki/Stepper_motor)
- [Pneumatics](https://en.wikipedia.org/wiki/Pneumatics)
- [Hydraulics](https://en.wikipedia.org/wiki/Hydraulics)

_*Drive Control*_

The [motor shield](https://www.adafruit.com/products/1438) on board your robot is part of your drive system, but it handles the electrical side of things. Because of the complexity of actuators in modern robotics, we typically use a separate control system for the actuators. Complex drive control systems, such as those for [quadrotor drones](https://www.youtube.com/watch?v=geqip_0Vjec), may require on-board accelerometers, gyroscopes and [logic systems](https://www.youtube.com/watch?v=UR0hOmjaHp0) to maintain balance. The drive control has three responsibilities:

- Power the actuators
- Isolate the power system from the logic system
- Provide an interface or messaging system for the logic system to control the motors

_*Sensors*_

A robot may have sensors to collect information about its surroundings. In this course, you will be using:

- Ultrasonic Range Finders
- Thermopile "heat" sensors
- Hall Effect "magnetic" sensors

_*Logic System*_

Your [SparkFun Photon Redboard](https://www.youtube.com/watch?v=RP2ow-N9VD0) board serves as the logic system for your robot. It's the brain. You program it to take in sensor data, make a decision and control the actuators.

_*Power System*_

Most robots, because of their logic systems, have some electrical component. Our robot is battery powered, though there are [larger robots](https://www.youtube.com/watch?v=wE3fmFTtP9g) designed to be combustion powered.

### Nuts and Bolts

TL;DR - additional notes, specifics of this robotics kit, and alternative components.

_*Chassis*_

We originally considered 3D printing the entire chassis and publishing our STL model. However, it was not cost effective and the amount of time required to print one chassis exceeded 4 hours on our printer.

_*Drive Train*_

5v motors tend to be the cheapest available. The motors in this kit are in "servo form factor." They are designed to be the same size and shape as a servo and match the chassis. Comparatively, you can get motors that have metal gearing and more torque. Some motors require 12v power supplies. A simple motor typically operates in only one direciton. Our drive control system has a way to [reverse the polarity](https://www.youtube.com/watch?v=QDaCMhKPGys) on the motor and make it spin in a different direciton.

Typical alternatives for 5v motors are:

-  Servo motors: motors that typically rotate a certain number of degrees in each direction and provide feedback to the logic system about how far they have turned. They may have their own logic boards embedded in the motor. Effectively, you can tell the motor to turn to a specific position. They tend to have less torque than simple motors. These are typically used as actuators for things that require precise control, like robotic arms.
-  Continuous rotation servos: servos that rotate freely in either direction with programmable speed. They are very similar to simple motors, except they have onboard logic to control speed and direction.
-  Stepper motors: similar to servos, though they are less precise and are "always hot", in that they constantly consume power regardless of whether or not they are changing position.

_*Drive Control*_

The specfic board that we chose as our drive control has two major features:

- [H-Bridges](https://en.wikipedia.org/wiki/H_bridge): a relay circuit that allows for polarity control of 5v motors. Although 5v motors typically only operate in one direction, an H-Bridge allows for polarity flipping so that the motor can operate in both directions. In addition, H-Bridges allow for Pulse Wave Modulation control - effectively allowing for speed control of the motor.
- External power with polarity protection: An on-board [diode](https://en.wikipedia.org/wiki/Diode) (which allows electricity to flow forward, but not backward) means that you won't get voltage going to the logic board in the wrong direction. This could fry your logic board. A motor is designed to convert electric energy to mechanical energy. If you spin the motor manually, however, it converts mechanical energy to electric energy. Effectively, it is a hand crank generator. This generation of electricity is called _feedback_ and can damage your logic board if there isn't protection.

If you are only using one or two low-power servos as actuators, you may be able to get away without using a separate drive control system, depending on the quality of your power source.

_*Logic System*_

Arduino style boards typically have several features that make them convenient for robots. Here are some considerations when choosing a logic system:

- Arduino style boards have an onboard voltage regulator - they can safely take power from a range of 5v to 12v and the voltage will be dropped to a safe level for the board. In addition, many voltage regulators have polarity protection. Reversing the positive and ground pins from a battery can be dangerous for a logic board.
- 3.3v or 5v logic? Many controllers list a "logic level" - that is, the amount of voltage output and input from and to any pins on the controller. They are not compatible with each other, so choose carefully when pairing your logic board with other systems, especially sensors. 
 
_*Power System*_

In this case, we are using a USB battery, which provides 5 volts of power. By closing the VIN jumper (adding a jumper to bridge the two pins), the power is shared between the drive system and the logic system. For our robot, which has low power requirements, this is perfectly fine. For larger robots, the systems are typically powered separately communication between the logic system and the drive control happens through relays - devices which mechanically isolate and separate both systems but allow communication between them.

Voltage is the amount of potential or "motivation" of electron flow. A device rated 5v will require at least a 5 volt power source, and may have a maximum voltage that it can tolerate. A 6 volt battery pack can provide up to 6 volts of flow, on average. When the batteries are fresh, they will provide a little more voltage than 6 volts. When they run low, the voltage drops very quickly from 5.5 volts down to nothing. You know your batteries are running low when the logic board begins "browning out" - randomly resetting with flickering lights.

Milliamp-Hours (mAh) is a measurement of how much current the batteries can sustain power. If the logic board requires 180 milliamps of power to operate and each motor requires 100 milliamps, then you can expect a battery pack rated at 5200 mAh to provide approximately 10 hours of operation. (5200 / (180 + 100 + 100)). Realistically, this will probably be lower. 

Another thing to consider is that our maximum current output from the USB battery pack is 2 amps. Therefore, larger motors can't be powered using USB power. (Although, really, if you're using high amperage motors then you want a low amperage, low voltage power source for the logic board and a completely separate power source for the motor shield. Also, remove the VIN Jumper.) Finally - 9v batteries always have low output. Never use those to power a robot or logic board.

_*Why USB Power*_

We first tried powering the entire device from standard AA batteries through the DC barrel jack, but our motors and the motor shield wouldn't run. Here's why -- A lot of Arduino shields operate on 5v logic, and the Photon Redboard isn't a standard Arduino. The pin that is labeled "5v" on standard Arduinos and Arduino shields is actually connected directly to the USB power source. If the Photon Redboard isn't being powered by the USB port, then that 5v pin will remain "cold" and Arduino shields will not function. If you really want to power your Photon Redboard using the DC barrel jack _and_ use Arduino shields, you must set your Shield to use 3v logic. In the case of our motor shield, there are logic selector traces and pads where you can sever the 5v pad and solder bridge the 3v pad.