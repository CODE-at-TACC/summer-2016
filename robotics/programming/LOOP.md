### ```loop```

** TODO: YouTube demonstration **

In Build, search for the ```codetacc-robotics``` library, then click "Use This Example." This makes a copy of the example for you that you may modify and flash to your robot. In your code, you will find a section called ```loop``` that is bounded by curly braces: 

```c
void loop() {
// some stuff
}
```
Try modifying the lines within the curly braces to make your robot do something different. Make one modification at a time. Verify the code and then flash it before moving on. If you are pair-programming, change partners between each modification.

### Nuts and Bolts

TL;DR - Students learn how to call a function and alter a parameter. If they've never seen Java before, there will be no learning interference. If you've never used C++, you may need to read this section.

_*Functions and Parameters*_

Students will end up seeing that every "command" requires parentheses and a semi-colon. You can make the distinction between code that is a command for the controller (as denoted by a semi-colon at the end of the line) and code that is the structure of the commands (as denoted by curly braces.)

Later on, we will get into the habit of always using curly braces for every flow-control structure. It's a good habit.

_*Object Variables and Pointers to Objects*_

** TODO move to next lesson on writing your own methods **

We're stepping back into the dark ages of C++ here, so a couple of programming notes about the differences between C++ and Java:

In Object Oriented Programming, we tend to refer to any function that is not part of a class a "method" regardless of whether or not it returns something. Technically, in C++ a ```void``` function is still a function that returns nothing.

In Java, you may have an object on which you are calling code:
 
```motor.run()```
  
but in C++ there is a distinction between direct object variables and pointers to objects. Here's an example of a variable of an object.
  
  ```c
Adafruit_MotorShield shield = Adafruit_MotorShield();
  ```

I can call any of ```shield```'s method directly, such as in:

```c
shield.begin()
```

If you have a variable that is a pointer, however, things are a little trickier.

```c
Adafruit_DCMotor *myMotor = shield.getMotor(`)
```

The ```*``` means the variable is a pointer. It's like a Java reference, but you can do weird things like manipulate memory. In this case, ```*myMotor``` must be a pointer because it is dynamically created at runtime. To call any methods beloning to ```*myMotor```, you must use a ```->``` operator, such as in:

```myMotor->run(FORWARD)```

_*What is this ```codetacc-robotics``` library, anyway?*_

Particle.io allows for the publishing of community libraries. These are open source projects that can be used by anyone. In order to publish the library, the firmware code must be a library that is hosted on GitHub with some additional items, such as the example project.

The library itself is a modified version of [Adafruit's Motor Shield V2 Library](https://github.com/adafruit/Adafruit_Motor_Shield_V2_Library) that has been changed to be compatible with Particle.io devices and re-arranged to be published as a Particle.io community library.

Students will use this project as a base for all of their work for this curriculum.