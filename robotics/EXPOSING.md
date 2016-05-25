# Exposing Functions to the Web

### Introduction

The Particle.io platform is powerful because it allows the firmware on board your robot to expose data and functions to the Internet. This means that you can control your robot via the web!

####[YouTube: Exposing Functions](https://youtu.be/j1J5oLPaQ1I?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

### [`explorer`](http://code.tacc.utexas.edu/particle-explorer)

For this lesson, we're going to use [`explorer`](http://code.tacc.utexas.edu/particle-explorer). Once you login the `explorer` web app, you will be able to view any _exposed_ functions. _Exposed_ functions and variables are functions in your firmware that have web addresses associated with them. You can use the web to access variables and functions in your firmware while it is running. It is one of the primary features of the [Particle.io](http://particle.io) platform.

### Exposing a Function

Look at your `setup` function. It should look like this:

```
void setup() {
  shield.begin();
  leftMotor->setSpeed(150);
  rightMotor->setSpeed(150);
}
```

We're going to add a line of code to expose the `forward` method.

```
void setup() {
  shield.begin();
  leftMotor->setSpeed(150);
  rightMotor->setSpeed(150);

  Particle.function("forward", forward);
}
```

Flash your firmware and start your robot. The `explorer` should automatically detect the newly exposed function. Try running it from `explorer`.

... it probably doesn't behave that significantly differently. That's because your `loop` function is running a bunch of other code at the same time. Delete the contents of the `loop` function. Now see if it does what you expect.

### Try This

- Expose the other functions of your robot, to make it controllable
- How often can you call functions before you get an error or the robot no longer responds to `explorer`?

### Nuts and Bolts

TL;DR - The Particle.io cloud implements a RESTful API for everything. `explorer` just wraps it up in a neat Javascript enabled package.

_*Manually cURLing*_

There's an old Unix tool called `curl` which allows you to send a simple web request. It will print out the result of the web request. You can find installers for Windows and OSX ports. If you want to manually activate the function, you can POST to the URL of the exposed function. [See the Particle.io reference](https://docs.particle.io/reference/api/#call-a-function).

_*Access Tokens and Device IDs*_

...you'll notice that the above requires your device's numerical ID and an access token from your account. `explorer` uses a Javascript library that performs login, token and device management. In addition, it automatically scans the _REST endpoint_ of the robot to see which functions are available. Finally, a second wrapper library used by `explorer` prevents multiple calls to the same function before the first call completes. This is not standard functionality of the Particle.io platform.

_*Calling Functions*_

Calling a function on a device via web that directly controls motors is not necessarily the best way to accomplish things when writing firmware for a custom device. In a typical application, you may have the firmware expose a function that receives data about a requested action, records the request, and then acts upon it later in the loop. The function that is being called will _preempt_ anything executing in the loop. This can lead to conditions where the firmware will behave unpredictably, especially if the function accesses any global variables. Therefore, an application with exposed functions should follow two guidelines:

- Exposed functions should finish execution quickly
- If you are using an exposed function to handle something that takes a long time, you probably want to use the exposed function set a global variable as a flag and then handle execution in your main `loop`.
- Global variables used by exposed functions should be designated as `volatile`