# Flora Color Sensor

The AdaFruit Color Sensor detects the amount of red, green and blue light from an object. With these RGB values, the device can "see" color.

### Connecting the Flora Color Sensor

The Flora Color Sensor is an I2C device. Connect the `SDA` pad to the `SDA` pin on the Photon, the `SCL` pad to the `SCL` pin on the Photon, the `3v` pad to the `3v` pin on the Photon and the `GND` pad to the `GND` pin on the Photon. _It's very important that you only connect the `3v` pad to the `3v` pin and NOT the `VIN` pin._

### The RGB Sensor Library

In the BUILD IDE, search for the `ADAFRUIT_TCS34725` library and use the `TCS34725.ino` as your example code. Let's look at the `loop` function:

```
void loop() {
    uint16_t clear, red, green, blue;

    tcs.setInterrupt(false);      // turn on LED
    
    delay(60);  // takes 50ms to read 
      
    tcs.getRawData(&red, &green, &blue, &clear);
    tcs.setInterrupt(true);  // turn off LED
    
    // Figure out some basic hex code for visualization
    uint32_t sum = clear;
    float r, g, b;
    
    r = red; r /= sum;
    g = green; g /= sum;
    b = blue; b /= sum;
    r *= 256; g *= 256; b *= 256;
    
    sprintf(szInfo, "%d,%d,%d", (int)r, (int)g, (int)b);
    
    Spark.publish("colorinfo", szInfo);
    
    Serial.println(szInfo);
    
    delay(1000);
}
```

This code publishes the color values that it reads every second as an event. You can view the event with the [Particle Dashboard](http://dashboard.particle.io). Unfortunately, the Particle.io cloud limits published events to 60 events within 2 minutes. Change the delay to `5000` to reduce this rate.


### Try This

- Test the sensor to see what types of values it reads when it senses objects that aren't red, green or blue.
- Try to get the sensor to give feedbackw when yellow is detected. (Hint: Yellow is a combination of other colors, and there may be a range of red, green and blue values that match different shades of yellow!)