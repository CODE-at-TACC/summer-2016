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

