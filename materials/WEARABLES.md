# Wearables

Every individual project will require each of the materials in the "Basics" section. However, you may choose to buy fewer quantities of other parts for your class and have the students pick and choose components for their projects from what is available. Students are limited by the amount of current that their power supply can put out on their wearable, so they won't be using every device all at once.

In addition to the various electronic components listed here, you will need sewing materials and supplies. Good sewing needles and needle-threaders, scissors are a must. Standard thread, buttons, cloth scraps (for practice or decoration) also are useful. We find that elastic bands and felt are good surfaces for sewing conductive traces and attaching components.

CODE @ TACC uses products from both the [LilyPad Arduino](http://lilypadarduino.org/) and [Adafruit Flora](https://www.adafruit.com/category/65) platforms. SparkFun sells the LilyPad sewable electronics platform. Proceeds from LilyPad sales go to support [Dr. Leah Buechley's researech in e-textiles and wearable electronics](http://web.media.mit.edu/~leah/grad_work/projects/bracelets/bracelet.html). For the controller, we use the Particle.io Electron. 

Here are wishlists for the materials we use:

- [Adafruit Wearables Wishlist](http://www.adafruit.com/wishlists/395782)
- [SparkFun Wearables Wishlist](http://sfe.io/w124759)

### Basics

Every project will require on of each of the following materials:

| Item | Description |
|:---- | :---------- |
|[Particle.io Photon without headers](https://www.adafruit.com/products/2722)| Breakout boards that are not specifically designed for sewing can still be used with small gauge needles. Alternatively, you can purchase a [Photon with headers](https://www.adafruit.com/products/2721) and use a [SparkFun Photon Wearable Shield](https://www.sparkfun.com/products/13328)|
|[Adafruit Powerboost 500C](https://www.adafruit.com/products/1944)|This is our battery connection, charger and power regulator. The photon consumes 180 milliamps of current, so this 500 milliamp regulator will be necessary to supply enough current for additional devices.|
|[Lithium Ion Polymer Battery - 3.7v 500mAh](https://www.adafruit.com/products/1578)|This battery is a good size for a wearable device. It will provide about two hours of continuous operation to the Photon. If you are also doing the [Robotics](./ROBOTICS.md) project, you can use the 1200mAh battery from there.|
|[Conductive Thread](https://www.adafruit.com/products/640)|Conductive thread allows us to sew in our circuits. It is somewhat "springy," so applying a little bit of superglue to hold down knots is helpful. Alternatively, you can use [conductive yarn](https://www.adafruit.com/products/603). It is thicker, but doesn't have the "spring" to it that makes it difficult to tie into knots. Plan to expend at least 15 feet for a small project.|
|[LilyPad Slide Switch](https://www.sparkfun.com/products/9350)|Can be placed between the PowerBoost and the Photon to provide on-off capability.|

### Output Devices

These are devices that can be used to output feedback to the user of a wearable device.

|Item|Description|
|:---|:----------|
|[LilyPad Buzzer](https://www.sparkfun.com/products/8463)|An audible buzzer|
|[LilyPad LED (White)](https://www.sparkfun.com/products/10081)|A sewable LED. There are other colors available at SparkFun|
|[LilyPad Pixel Board](https://www.sparkfun.com/products/13264)|An addressable RGB lED}
|[LilyPad Vibe](https://www.sparkfun.com/products/11008)|A 5V vibrating motor|

### Sensors

There are four types of sensors. In order of challenge to use, they are simple switches, analog sensors, variable resistors and I2C sensors.

|Item|Description|
|:---|:----------|
|[LilyPad Button Board](https://www.sparkfun.com/products/8776)|A sewable push button switch|
|[LilyPad Reed Switch](https://www.sparkfun.com/products/13343)|A switch that closes when a magnet is placed near it|
|[LilyPad Temperature Sensor](https://www.sparkfun.com/products/8777)|An analog output temperature sensor. The higher the temperature, the more voltage it will output.|
|[Pulse Sensor Amped](https://www.adafruit.com/products/1093)|An analog output pulse sensor|
|[Short Flex Sensor](https://www.adafruit.com/products/1070)|A variable resistor (25kOhms to 100kOhms) that increases the more the sensor is flexed|
|[Square Force Resistive Sensor](https://www.adafruit.com/products/1075)|A variable resistor that increases with applied pressure|
|[Flora Color Sensor](https://www.adafruit.com/products/1356)|An I2C sensor that determines the color of an object|
|[Flora Lux Sensor](https://www.adafruit.com/products/1246)|An I2C sensor that determines ambient light|
|[Flora 9-DOF](https://www.adafruit.com/products/2020)|An I2C accelerometer, magnetometer and compass for determining movement, orientation and heading|
|[Flora UV Sensor](https://www.adafruit.com/products/1981)|An I2C light and UV sensor|