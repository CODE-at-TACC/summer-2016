# Reading Sensors

### Introduction

Sensors are how a robot receives input from the world around it. There are many types of sensors. In this kit, you will be working with two types of sensors: Thermopile and Ultrasonic. The Thermopile IR sensor senses infrared radiation from a heat source. The Ultrasonic sensor is a sonar-like range finder.

** TODO YouTube on Sensors, how to connect **

### Sensor Interfaces

There are many ways you can add hardware to a microcontroller like the Particle.io Photon. They have different ways of communicating with the controller. The most common, in order of complexity, are:

- Analog voltage
- Variable resistance
- Serial Peripheral Interface (SPI)
- Inter Integrated Circuit (I2C)
- AT Serial Commands

Frequently, you will use a library of pre-written functions that hides these details from you.

### Using the Thermopile Sensor

First, connect the Thermopile Sensor. Refer to the video at the beginning of this section of how to connect the sensor.

Find the section of your code labeled ```Variables```. Variables are a way of storing information. There are two types of variables we use - primitive variables that contain a single simple value like a number, and complex variables (called _objects_) that might represent something like a sensor with a lot of functionality. Let's see what's there already:

```
Adafruit_MotorShield shield = Adafruit_MotorShield();
Adafruit_DCMotor *leftMotor = shield.getMotor(1);
Adafruit_DCMotor *rightMotor = shield.getMotor(2);
```

Below the last line in this section, add another line:

```
Adafruit_TMP007 thermopile = Adafruit_TMP007();
```

Remember to verify your code. You can flash your robot if you like, though it may not do much at this

### Activating the Themopile Sensor

You've just created a variable that represents the Thermopile sensor. We now have to get the sensor to activate. Find the ```setup``` section of your firmware.

```
void setup() {
  shield.begin();
  leftMotor->setSpeed(150);
  rightMotor->setSpeed(150);
}
```

After the ```rightMotor->setSpeed(150)``` line, add this line:

```
thermopile.begin()
```

That's all it takes to activate the sensor. But what about reading it?

### Creating a Variable

Let's make a variable that will store the data read from the sensor. Go back to the ```Variables``` section and add a variable:

```
double temperature = 0;
```

This creates a variable that can store decimal values, with a value that is currently ```0```. How do we fill this value? Go to your ```loop()``` function and replace the contents with this:

```
void loop() {
  temperature = thermopile.readObjTempC();
  delay(1000);
}
```

But how do we, as the human, know what the value of this variable is when the robot is running? The robot doesn't have a screen for you to print this value. We could connect a USB cable to the robot and have it print this variable, but then the robot couldn't go anywhere. However, this is why we're using the Particle.io platform...

### Exposing the Variable

Remember how you exposed a function and activated it through the ```explorer```? You can do the same thing with variables. In your ```setup``` method, add a line of code:

```
Particle.variable("temperature", temperature);
```

Try flashing your firmware and play with explorer to see how your Thermopile sensor detects heat.

### Things to Try

Try integrating the Ultrasonic Sensor. Connect the ```trigger``` pin on the sensor to ```D2``` on your Photon and the ```echo``` pin on the sensor to ```D4``` on your Photon. Below is example code of how to get the Ultrasonic Sensor working. See if you can integrate it into your robot code. You will have to selectively insert these lines of code in different places in your firmware.

```
UltrasonicSensor ultrasonic = UltrasonicSensor(2, 4);
double distance = 0;

void setup() {
  Particle.variable("distance", distance);
}

void loop() {
  distance = ultrasonic.readCm();
  delay(1000);
}
```

### Nuts and Bolts

TL;DR - While we could print variables through the Serial interface, exposed variables allow you to let your robot roam. However, there are better ways of getting data from the device that we will explore later.

_*Serial Monitoring*_

You can, if you wish, use a traditional Serial monitor setup using the Particle Command Line Interface. While the Photon is connected via USB, you can start the serial monitor after it reaches the green flashing (looking for WiFi) stage of booting. Enter in the terminal command ```particle serial monitor```. The serial monitor will automatically end when the robot reboots, for any reason. Your firmware must activate the serial port and print to it:

```
int count = 0;

void setup() {
  Serial.begin(9600);
  Serial.println("Hello world");
}

void loop() {
  Serial.println(count);
  count++;
  delay(1000);
}
```

_*Exposed Variables*_

Exposed variables are read-only. They must also be refreshed manually through the ```explorer``` due to the limit of requests that can be made to the variable within a certain time period. While this approach doesn't allow for traditional granular debugging, it allows a programmer to see general state. The cloud variable exposure mechanism is designed for building Internet of Things devices. That is to say that a user is only going to want to occasionally see specific variables. Other cloud mechanisms, that we will explore later, include event publishing. This means that the robot (or any device) will publish important information only when a significant change happens, and the decision to publish the data is driven by the firmware rather than the end user of the device.