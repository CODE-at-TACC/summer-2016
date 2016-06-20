# Flora Lux Sensor

The AdaFruit Flora Lux Sensor reads the ambient light and returns the amount of luminence in a unit of measurement called _lux_.

### Connecting the Flora Lux Sensor

The Flora Lux Sensor is an I2C device. Connect the `SDA` pad to the `SDA` pin on the Photon, the `SCL` pad to the `SCL` pin on the Photon, the `3v` pad to the `3v` pin on the Photon and the `GND` pad to the `GND` pin on the Photon. _It's very important that you only connect the `3v` pad to the `3v` pin and NOT the `VIN` pin._

### The Lux Sensor Library

In the BUILD IDE, search for the `ADAFRUIT_TSL2561_U` library and use the `Adafruit_TLS2561_U.ino` as your example code. Let's look at the `loop` function:

```
void loop(void) 
{  
  /* Get a new sensor event */ 
  sensors_event_t event;
  tsl.getEvent(&event);
 
  /* Display the results (light is measured in lux) */
  if (event.light)
  {
    Serial.print(event.light); Serial.println(" lux");
  }
  else
  {
    /* If event.light = 0 lux the sensor is probably saturated
       and no reliable data could be generated! */
    Serial.println("Sensor overload");
  }
  delay(250);
}
```

Notice where it says `if (event.light)`. The `event.light` variable contains the light level of the sensor. In this `if` statement, the light value is printed to something called the `Serial` port. Since you don't have the ability to read the `Serial` port with your current hardware setup, let's try exposing the light level in a variable.

### Exposing the Light Variable

We can't expose `event.light` directly, so do the following:

- Create a new variable called `float light = 0;`
- In the `setup` function, expose the `light` variable
- In the  `loop` function, copy the value of `event.light` to `light` using the statement, `light = event.light;`

### Try This

- Get a vibe motor to give a warning when it detects a certain level of light.
- Change the pitch of a buzzer depending on the level of the light