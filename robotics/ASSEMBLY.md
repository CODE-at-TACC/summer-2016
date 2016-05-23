# Assembling Your Robotics Kit

Some soldering may be required. Follow this instructional video to put together your robot and flash it with firmware.

####[YouTube: Assembling Your Robot](https://youtu.be/aCVczCflXvU?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

####[YouTube: Flashing Firmware](https://youtu.be/jQxIPMPA-wM?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

_*Try this:*_

- Disconnect power from the USB battery pack. Try reversing the connections on each pair of wires connecting the motors. What happens?
- Which way is "correct"?

### Nuts and Bolts

TL;DR - [How to solder](https://www.youtube.com/watch?v=QKbJxytERvg) and other considerations when building your robot.

_*Soldering*_

It's not that bad, really. Here are some tips:

- Use a low wattage soldering iron.
- Make sure that you unplug the iron when it's not in use.
- Learn to clean and tin your tip. This maintains the heat conductivity of the tip.
- If you are soldering headers onto a board, you can use a breadboard or other components to actually hold everything in place, in the way that a jig holds.pieces of wood you are trying to join
- Practice.

_*Chassis Kits*_

There are many chassis kits out there, and there are even [aluminum chassis sytems](https://youtu.be/mxAWhiE75Og) that you can use to make just bout anything. You might ask, "why not just use Legos like you did last year?" In addition, to the core Mindstorms system requiring the use of non-open source software, we found the cost to be too high for a program focused more on the electrical engineering and programming aspects of this year's curriculum.

_*Firmware*_

Throughout this robotics curriculum, we will use the ```codetacc-robotics``` library. It includes an example program that will get the robot "up and running". Consider it the "Hello World" of robotics -- it allows the students to see that every system and every part of their toolchain works.

_*Which way is the "right" way to hook up the motors?*_

Reversing the polarity on the motor connections will reverse the motor direction. Who is to say which way is correct? Well... one could argue that if you look at the firmware, there is an _intended_ way for the robot to be compatible with the code as its written. Reversing the motor polarity would require altering the firmware to function as originally intended.

_*What is this `codetacc-robotics` library, anyway?*_

Particle.io allows for the publishing of community libraries. These are open source projects that can be used by anyone. In order to publish the library, the firmware code must be a library that is hosted on GitHub with some additional items, such as the example project.

The library constains modified versions of [Adafruit's Motor Shield V2 Library](https://github.com/adafruit/Adafruit_Motor_Shield_V2_Library) and the [Adafruit TMP007 Sensor Library](https://github.com/adafruit/Adafruit_TMP007_Library). They have been changed to be compatible with Particle.io devices and re-arranged to be published as a Particle.io community library.

Students will use this project as a base for all of their work for this curriculum.