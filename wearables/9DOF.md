# Flora 9-DOF Sensor

The AdaFruit Flora 9-DOF Sensor detects acceleration, magnetic fields and gyroscopic rotation. It can detect the orientation of the sensor in 3D space.

### Connecting the Flora 9-DOF Sensor

The Flora 9-DOF Sensor is an I2C device. Connect the `SDA` pad to the `SDA` pin on the Photon, the `SCL` pad to the `SCL` pin on the Photon, the `3v` pad to the `3v` pin on the Photon and the `GND` pad to the `GND` pin on the Photon. _It's very important that you only connect the `3v` pad to the `3v` pin and NOT the `VIN` pin._

### The 9-DOF Sensor Library

In the BUILD IDE, search for the `ADAFRUIT_LSM9DS0` library and use the `sensorapi.ino` as your example code. Let's look at the `loop` function:

```
void loop(void)
{
  /* Get a new sensor event */
  sensors_event_t accel, mag, gyro, temp;

  lsm.getEvent(&accel, &mag, &gyro, &temp);

  // print out accelleration data
  Serial.print("Accel X: "); Serial.print(accel.acceleration.x); Serial.print(" ");
  Serial.print("  \tY: "); Serial.print(accel.acceleration.y);       Serial.print(" ");
  Serial.print("  \tZ: "); Serial.print(accel.acceleration.z);     Serial.println("  \tm/s^2");

  // print out magnetometer data
  Serial.print("Magn. X: "); Serial.print(mag.magnetic.x); Serial.print(" ");
  Serial.print("  \tY: "); Serial.print(mag.magnetic.y);       Serial.print(" ");
  Serial.print("  \tZ: "); Serial.print(mag.magnetic.z);     Serial.println("  \tgauss");

  // print out gyroscopic data
  Serial.print("Gyro  X: "); Serial.print(gyro.gyro.x); Serial.print(" ");
  Serial.print("  \tY: "); Serial.print(gyro.gyro.y);       Serial.print(" ");
  Serial.print("  \tZ: "); Serial.print(gyro.gyro.z);     Serial.println("  \tdps");

  // print out temperature data
  Serial.print("Temp: "); Serial.print(temp.temperature); Serial.println(" *C");

  Serial.println("**********************\n");

  delay(250);
}
```

This loop reads the sensor and stores the acceleration, gyroscopic and magnetic data in different variables. It also prints these values to the Photon's Serial port. Since we don't have access to the Serial port, we will have to expose any variables we wish to measure.

### Exposing the `gyro.gyro.x` Variable

We can't expose `gyro.gyro.x` directly, so do the following:

- Create a new variable called `float gyrox = 0;`
- In the `setup` function, expose the `gyrox` variable
- In the  `loop` function, copy the value of `gyro.gyro.x` to `gyrox` using the statement, `gyrox = gyro.gyro.x;`

### Try This

- What are different values that you can use to detect when the sensor has "tipped" over?
- How can you detect different types of movement events?
- Get your sensor to give an audible buzzer warning when the sensor tips past a certain threshold.