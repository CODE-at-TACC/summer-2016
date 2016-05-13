# Adding New Functions

### Introduction

You're going to add your own custom functions to the firmware. Use the ```1_robot.ino``` example firmware for this lesson.

** TODO: YouTube Video about adding a function **

### What's there already?

Inside of your ```loop``` method, you can see the following code:

```
  forward();
  delay(1000);
  stop();
  delay(1000);
  left();
  delay(1000);
  right();
  delay(1000);
```

Each of these is a _function call_. A _function_ is a set of instructions that has been given a name. When you write the name of the function, give a value (or no value at all) inside of the parentheses and end a line in a semi-colon ```;``` your firmware will activate the function when it encounters the function call. 

This is the _function definition_ for ```forward()```:

```
int forward(String params = "") {
  leftMotor->run(FORWARD);
  rightMotor->run(FORWARD);
  return 1;
}
```

When your firmware encounters the line of code ```forward();``` it runs the code inside of that function definition.

You can create a new function by copying the definition for ```forward```, pasting it underneath the closing ```}``` and then changing the name to something different. The naming rules are:

- The function name must begin with a letter or an underscore
- Only letters, numbers and the underscore are allowed
- No spaces!
- Capitalization matters!
- You should avoid using names that you've already used, or special reserved words. (Imagine naming a newborn baby "You." Can you imagine the life of confusion they would lead? "Hey, You!" "You, take out the trash!")
- Names should be meaningful

### Try this:

- Create a function definition for a function called ```backward```.
- Call this function that you made inside of the loop, so that your robot goes forward, spins left, spins right, then backs up.

### Nuts and Bolts

TL;DR - Despite similar "look and feel", there are some important differences between C++ and Java. If you've only worked in Java, you may want to read this.

_*Why not a void?*_

Later on, we will be exposing functions to the cloud using the Particle cloud API. It requires that the function be of type ```int``` with a ```String``` parameter, for receiving any arguments from the web. This means that, with the function header ```int backward(String params = "")```, we can simply expose it to the web with the function call ```Particle.function("backward", backward)``` and it can be called via the web. The argument ```String params = ""``` allows us to make a call to ```backward``` in code with ```backward();```. If no parameter is included in the function call, the default parameter value is an empty String.

_*Object Variables and Pointers to Objects*_

We're stepping back into the dark ages of C++ here, so a couple of programming notes about the differences between C++ and Java:

In Object Oriented Programming, we tend to refer to any function that is not part of a class a "method" regardless of whether or not it returns something. Technically, in C++ a ```void``` function is still a function that returns nothing.

In Java, you may have an object on which you are calling code:
 
```
motor.run();
```
  
but in C++ there is a distinction between direct object variables and pointers to objects. Here's an example of a variable of an object.

```
Adafruit_MotorShield shield = Adafruit_MotorShield();
```

I can call any of ```shield```'s method directly, such as in:

```
shield.begin()
```

If you have a variable that is a pointer, however, things are a little trickier.

```
Adafruit_DCMotor *myMotor = shield.getMotor()
```

The ```*``` means the variable is a pointer. It's like a Java reference, but you can do weird things like manipulate memory. In this case, ```*myMotor``` must be a pointer because it is dynamically created at runtime. To call any methods beloning to ```*myMotor```, you must use a ```->``` operator, such as in:

```myMotor->run(FORWARD);```

_*What is this ```codetacc-robotics``` library, anyway?*_

Particle.io allows for the publishing of community libraries. These are open source projects that can be used by anyone. In order to publish the library, the firmware code must be a library that is hosted on GitHub with some additional items, such as the example project.

The library constains modified versions of [Adafruit's Motor Shield V2 Library](https://github.com/adafruit/Adafruit_Motor_Shield_V2_Library) and the [Adafruit TMP007 Sensor Library](https://github.com/adafruit/Adafruit_TMP007_Library). They have been changed to be compatible with Particle.io devices and re-arranged to be published as a Particle.io community library.

Students will use this project as a base for all of their work for this curriculum.