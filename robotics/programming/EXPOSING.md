# Exposing Functions to the Web

### Introduction

The Particle.io platform is powerful because it allows the firmware on board your robot to expose data and functions to the Internet. This means that you can control your robot via the web!

** TODO YouTube video on exposing a function and using explorer **

### ```explorer```

For this lesson, we're going to use [```explorer```](../../particle/explorer). The basic steps for using it are:

- Start a python web server in the ```explorer``` directory with the terminal command ```python -m SimpleHTTPServer```
- Browse to your local python server at the address [http://localhost:8000](http://localhost:8000)
- Login to ```explorer``` with your Particle.io username and password

You'll notice all of your devices. The web page listens to events, such as your device coming online. You can select the Particle.io device that corresponds to your robot.

### Exposing a Function

Look at your ```setup``` function. It should look like this:

```
void setup() {
  shield.begin();
  leftMotor->setSpeed(150);
  rightMotor->setSpeed(150);
}
```

We're going to add a line of code to expose the ```forward``` method.

```
void setup() {
  shield.begin();
  leftMotor->setSpeed(150);
  rightMotor->setSpeed(150);

  Particle.function("forward", forward);
}
```

Flash your firmware and start your robot. The ```explorer``` should automatically detect the newly exposed function. Try running it from ```explorer```.

... it probably doesn't behave that significantly differently. That's because your ```loop``` function is running a bunch of other code at the same time. Delete the contents of the ```loop``` function. Now see if it does what you expect.

### Try This

- Expose the other functions of your robot, to make it controllable
- How often can you call functions before you get an error?

### Nuts and Bolts

TL;DR - The Particle.io cloud implements a RESTful API for everything. ```explorer``` just wraps it up in a neat Javascript enabled package.

_*Manually cURLing*_

There's an old Unix tool called ```curl``` which allows you to send a simple web request. It will print out the result of the web request. You can find installers for Windows and OSX ports. If you want to manually activate the function, you can POST to the URL of the exposed function. [See the Particle.io reference](https://docs.particle.io/reference/api/#call-a-function).

_*Access Tokens and Device IDs*_

...you'll notice that the above requires your device's numerical ID and an access token from your account. ```explorer``` uses a Javascript library that performs login, token and device management.

_*Calling Functions*_

Calling a function on a device via web that directly controls motors is not necessarily the best way to accomplish things when writing firmware for a custom device. In a typical application, you may have the firmware expose a function that receives data about a requested action, records the request, and then acts upon it later in the loop. The function that is being called will _preempt_ anything executing in the loop. This can lead to conditions where the firmware will behave unpredictably. Therefore, an application with exposed functions will have extremely short exposed functions.

** TODO Test **