# Adding New Functions

### Introduction

You're going to add your own custom functions to the firmware. Use the `1_robot.ino` example firmware for this lesson.

####[YouTube: Functions](https://youtu.be/WyGnx9MCQ8E?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

### What's already there?

Inside of your `loop` method, you can see the following code:

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

Each of these is a _function call_. A _function_ is a set of instructions that has been given a name. When you write the name of the function, give a value (or no value at all) inside of the parentheses and end a line in a semi-colon `;` your firmware will activate the function when it encounters the function call. 

This is the _function definition_ for `forward()`:

```
int forward(String params = "") {
  leftMotor->run(FORWARD);
  rightMotor->run(FORWARD);
  return 1;
}
```

When your firmware encounters the line of code `forward();` it runs the code inside of that function definition.

You can create a new function by copying the definition for `forward`, pasting it underneath the closing `}` and then changing the name to something different. The naming rules are:

- The function name must begin with a letter or an underscore
- Only letters, numbers and the underscore are allowed
- No spaces!
- Capitalization matters!
- You should avoid using names that you've already used, or special reserved words. (Imagine naming a newborn baby "You." Can you imagine the life of confusion they would lead? "Hey, You!" "You, take out the trash!")
- Names should be meaningful

### Try this:

- Create a function definition for a function called `backward`.
- Call this function that you made inside of the loop, so that your robot goes forward, spins left, spins right, then backs up.

### Nuts and Bolts

TL;DR - Despite similar "look and feel", there are some important differences between C++ and Java. If you've only worked in Java, you may want to read this. Also, the copy/paste approach for writing functions is okay for now.

_*Why not a void?*_

Later on, we will be exposing functions to the cloud using the Particle cloud API. It requires that the function be of type `int` with a `String` parameter, for receiving any arguments from the web. This means that, with the function header:

```
int backward(String params = "")
```

we can simply expose the `backward` function to the web with this line of code in `setup`:

```
Particle.function("backward", backward);
``` 

...and `backward` can now be called directly from the web. This will be demonstrated in the next lesson. The argument `String params = ""` allows us to make a call to `backward` in code without using any parameters: 

```
backward();
```

 If no parameter is included in the function call, the default parameter value is an empty String.

_*Object Variables and Pointers to Objects*_

We're stepping back into the dark ages of C++ here, so a couple of programming notes about the differences between C++ and Java:

In Object Oriented Programming, we tend to refer to any function that is not part of a class a "method" regardless of whether or not it returns something. Technically, in C++ a `void` function is still a function that returns nothing.

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

The `*` means the variable is a pointer. It's like a Java reference, but you can do weird things like manipulate memory. In this case, `*myMotor` must be a pointer because it is dynamically created at runtime. To call any methods beloning to `*myMotor`, you must use a `->` operator, such as in:

```
myMotor->run(FORWARD);
```

_*The Copy/Paste Approach*_

Many coding curriculum models from the early days of programming ([the dark ages of console programming](https://historysshadow.files.wordpress.com/2014/05/dark-ages.jpg)) have students typing "Hello World" and repeating the actions of their instructor. While there is some value to rote learning, this curriculum takes an exploratory "top-down" approach. The implementation of most the functionality that students will use is abstracted from their view. Along those same lines, the nitty-gritty details of the purpose of each part of a function call isn't explained until the students first see their utility. Nothing is written from scratch.

Is it important for a student to be able to create a complex code structure from memory, such as write a function in C++ from scratch? Even professional programmers typically begin work in a new language by modifying pre-existing structures. Consider a professional programmer working with dozens of different languages across their entire career. What does a function definition look like in Python? Ruby? Lua? Or a Javascript AMD loader compatible function that is actually a dictionary class with private, public, instance and prototype scoping? The modern programmer inevitably does some cutting and pasting. Knowing the important parts of a function header are more important than the specific syntax. If we were using an IDE with code generation, the function header would be automatically generated for us.