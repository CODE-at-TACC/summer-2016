# Flora UV Index Sensor

The AdaFruit Flora UV Index Sensor reads the amount of Ultraviolet radiation hitting the sensor. Ultraviolet radiation contributes to sunburns and eventually skin cancer.

### Connecting the Flora UV Index Sensor

The Flora UV Index Sensor is an I2C device. Connect the `SDA` pad to the `SDA` pin on the Photon, the `SCL` pad to the `SCL` pin on the Photon, the `3v` pad to the `3v` pin on the Photon and the `GND` pad to the `GND` pin on the Photon. _It's very important that you only connect the `3v` pad to the `3v` pin and NOT the `VIN` pin._

### The UV Sensor Library

In the BUILD IDE, search for the `ADAFRUIT_SI1145` library and use the `si1145test.ino` as your example code. Let's look at the `loop` function:

```
void loop() {
  Serial.println("===================");
  Serial.print("Vis: "); Serial.println(uv.readVisible());
  Serial.print("IR: "); Serial.println(uv.readIR());
  
  // Uncomment if you have an IR LED attached to LED pin!
  //Serial.print("Prox: "); Serial.println(uv.readProx());

  float UVindex = uv.readUV();
  // the index is multiplied by 100 so to get the
  // integer index, divide by 100!
  UVindex /= 100.0;  
  Serial.print("UV: ");  Serial.println(UVindex);

  delay(1000);
}
```

Notice where it says:

```
float UVindex = uv.readUV();
```

This is called a _local_ variable, meaning that it exists inside of the `loop` function only. Unfortunately, that means that it can't be exposed as it is. However, we can modify it.

### Exposing the `UVindex` Variable

We can expose the `UVindex` variable with a few small modifications:

- Create the `UVindex` variable _outside_ of the `loop` function with the code:  `float UVindex = 0;`
- In the `setup` function, expose the `UVindex` variable
- In the  `loop` function, simply modify the `float UVindex = uv.readUV();` variable to say `UVindex = uv.readUV();` -- by removing the `float` keyword, we are telling the `loop` function to use the pre-existing _global_ `UVindex` variable

### Try This

- Get a vibe motor to give a warning when it detects a certain level of Ultraviolet light.
- Change the pitch of a buzzer depending on the level of the Ultraviolet light