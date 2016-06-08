# Servos

### Introduction

Servos are motors that can turn to a specific position in a 180 degree arc. You can wire a servo to the `Servo 1` port on your motor driver, and then use some simple code to make it work.

```
/**********************
Variables
***********************/

Servo myServo;

/**********************
void setup
***********************/

void setup() {
  // Servo 1 is always attached to pin 9
  myServo.attach(9);
  
  // turn to 90 degree position
  myServo.write(90);
}
```

### `for` Loops

What if we want to sweep through different positions? We can use code called a `for` loop that sweeps through different values. Try this:

```
void loop() {
  for (int position = 0; position < 180; position += 15) {
    myServo.write(position);
  }
  
  for (int position = 180; position > 0; position -= 15) {
    myServo.write(position);
  }
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
for (int position = 0; position < 180; position += 15) {
}
```
The last statement makes the loop increase the value of `position` by `15` every time the loop runs. Why is that important? Well, it allows the loop code to do something different every it runs because `position` is skip counting up from 0 to 180. Therefore, if we do:

```
for (int position = 0; position < 180; position += 15) {
  myServo.write(position);
}
```

It's the same as doing this:

```
myServo.write(0);
myServo.write(15);
myServo.write(30);
myServo.write(45);
myServo.write(60);
myServo.write(75);
myServo.write(90);
myServo.write(105);
myServo.write(120);
```

And so on. But it's a lot more convenient. The second loop that we created...

```
for (int position = 180; position > 0; position -= 15) {
  myServo.write(position);
}
```

...counts down from 180.