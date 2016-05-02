# Adding New Functions

### Introduction

You're going to add your own custom functions to the firmware.

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

TL;DR - we could have used a void, but then we would have to change the function header if we wanted to expose the function to the cloud.

_*The Copy/Paste Approach*_

Is it important for a student to be able to write a function in C++ from scratch, as opposed to copying and modifying a pre-existing one? Maybe. But consider a professional programmer working with dozens of different languages across their entire career. What does a function definition look like in Python? Ruby? Lua? Or a Javascript AMD loader compatible function that is actually a dictionary class with private, public, instance and prototype scoping? The modern programmer inevitably does some cutting and pasting. Knowing the important parts of a function header are more important than the specific syntax. If we were using an IDE with code generation, the function header would be automatically generated for us.

_*Why not a void?*_

Later on, we will be exposing functions to the cloud using the Particle cloud API. It requires that the function be of type ```int``` with a ```String``` parameter, for receiving any arguments from the web. This means that, with the function header ```int backward(String params = "")```, we can simply expose it to the web with the function call ```Particle.function("backward", backward)``` and it can be called via the web. The argument ```String params = ""``` allows us to make a call to ```backward``` in code with ```backward();```. If no parameter is included in the function call, the default parameter value is an empty String.

