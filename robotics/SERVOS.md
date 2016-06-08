# Servos

### Introduction

Servos are motors that can turn to a specific position in a 180 degree arc. You can wire a servo to the `Servo 1` port on your motor driver. Because of the way that the Photon works, you must use a wire to connect `D3` to `D10` to get the servo to work. In the `codetacc-robotics` library, use example `6_servos.ino`.

### Setting Up the Servo

In `6_servos.ino`, there is a `myServo` variable that represents the Servo.

```
/**********************
Variables
***********************/

Servo myServo;
```

In the `setup` function, you'll see where the servo is attached to pin 3, and then set to a position of 90 degrees.

```
/**********************
void setup
***********************/

void setup() {
  myServo.attach(3);
  
  myServo.write(90);
}
```

### `for` Loops

Look at the `scanning` state function. The `scanning` function will _sweep_ the servo left and right and look for the hottest heat signature and the position where it scanned the hottest heat signature. You will see some code that looks like this:

```
  hottestTemp = 0;
  hottestPosition = 0;

  for (int position = 0; position < 180; position++) {
    myServo.write(position);
    double currentTemp = thermopile.readObjTempC();
    if (currentTemp > hottestTemp) {
      hottestPosition = position;
      hottestTemp = currentTemp;
    }
    delay(5);
  }

  for (int position = 180; position > 0; position--) {
    myServo.write(position);
    double currentTemp = thermopile.readObjTempC();
    if (currentTemp > hottestTemp) {
      hottestPosition = position;
      hottestTemp = currentTemp;
    }
    delay(5);
  }
```

Let's dissect the `for` loop. The first thing is:

```
for ( some stuff ) {
  // do this stuff a lot
}
```

Everything inside the curly braces gets run by the for loop. That's the easy part to understand. Now for the meaty stuff. We'll take it part by part.

```
for (int position = 0; ; ) {
}
```

The first statement before the semi-colon says "create a temporary variable called `position`. It's an `int`eger, and the starting value is `0`." The `position` variable keeps track of how much of the `for` loop we've done at this point. We call it a _loop control variable_.

```
for (int position = 0; position < 180; ) {
}
```

The next statement says that the `for` loop should keep running as long as `position` is less than `180`.

```
for (int position = 0; position < 180; position++) {
}
```
The last statement makes the loop increase the value of `position` by 1 every time the loop runs. Why is that important? Well, it allows us to accomplish a lot with very little code. 

It's the same as doing this:

```
myServo.write(0);
myServo.write(1);
myServo.write(2);
myServo.write(3);
myServo.write(4);
myServo.write(5);
myServo.write(6);
myServo.write(7);
myServo.write(8);
...
```

...And so on. But it's a lot more convenient. The second loop that we created...

```
for (int position = 180; position > 0; position--) {
  myServo.write(position);
}
```

...counts down from 180.

Notice that inside each loop, it also takes a temperature reading and compares it to `hottestTemp`. This code is trying to find a temperature that is hotter than the one it currently thinks is the greatest. This type of code is very common in computer programming.

### Try This

You're going to make a heat seeking robot. Currently, the `scanning` state function finds the hottest temperature and position of where it scanned the hottest temperature, but it doesn't actually transition to other states. Create a state diagram that causes the robot to transition to other states, depending on whether or not the hottest temperature was to the left or the right of the robot. Then have the robot try to "seek" the hottest temperature. Bonus points if it also doesn't run in to walls!