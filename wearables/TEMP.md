# Temperature Sensor

The LilyPad Temperature Sensor reads ambient temperature. It's an _analog sensor_, in that it outputs more voltage from the `S` pin when it gets hotter. 

### Connecting the Temperature Sensor

Connect the `+` pad to the `VIN` pin on the Photon. Connect the `-` pad to the `GND`. Connect the `S` pad to the `A2` pin on the Photon.

### Source Code

Try running this firmware, then using [Particle Explorer](http://code.tacc.utexas.edu/particle-explorer) to see the `sensorValue` varaible.

```
#define 	TEMP 	A2

int sensorValue = 0;       

void setup() {
  Particle.variable("value", sensorValue);
}

void loop() {
  sensorValue = analogRead(TEMP);
  delay(100);
}
```

### Analog Read

The `analogRead` function will return the current voltage from a pin. (In this case `TEMP` points to the `A2` pin.) The value is anywhere from 0 to 1023, which represents a value somewhere from 0 to 5 volts. Unfortunately, it doesn't directly tell us the temperature. Therefore, you're going to have to do a little bit of math.

### Try This

According to the product webpage, the sensor will output 0.5v at 0 degrees Celsius and 0.75v at 25 degrees Celsius. At temperatures higher than 25 degrees Celsius, it will output an additional 10 millivolts per degree Celsius. 

- Add a `float voltage = 0` variable.
- Calculate the voltage based on the `sensorValue` variable. Remember - a value of `1023` represents a full 5 volts
- Once you know the voltage, write a conversion that converts every