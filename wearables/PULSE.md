# Pulse Sensor

When you go to the doctor, sometimes they will use a _pulse oximeter_ to measure your heart rate. It's a device they clip on your finger. It works by shining an LED through your finger. When your heart beats, blood rushing through your finger blocks some of the light. A _photoresistor_ on the sensor detects the dimming of the light from the LED. You can try using the Pulse Sensor to detect your heart rate.

### Connect the Pulse Sensor

The red wire goes to your Photon's `VIN` source. The black wire goes to the `GND` ground pin. The purple wire goes to the `A2` pin.

### The Pulse Sensor Library

In the Build IDE, search for the `PULSESENSOR_SPARK` library. Next use, the `pulsesensoramped-arduino-1dot4.ino` example to build your project. Flash the firmware and try it out!

### Modifying the Example

There's a lot of code here, but don't be intimidated. Most of the "work" that happens is taken care of for you. Let's look at the `loop` function:

```
//  Where the Magic Happens
void loop(){

	serialOutput() ;       
	
	if (QS == true){     //  A Heartbeat Was Found
		// BPM and IBI have been Determined
		// Quantified Self "QS" true when arduino finds a heartbeat
		digitalWrite(blinkPin,HIGH);     // Blink LED, we got a beat. 
		fadeRate = 255;         // Makes the LED Fade Effect Happen
		// Set 'fadeRate' Variable to 255 to fade LED with pulse
		serialOutputWhenBeatHappens();   // A Beat Happened, Output that to serial.     
		QS = false;                      // reset the Quantified Self flag for next time    
	} 
	else { 

		digitalWrite(blinkPin,LOW);            // There is not beat, turn off pin 13 LED
	}
	
	ledFadeToBeat();                      // Makes the LED Fade Effect Happen 
	delay(20);                             //  take a break
}
```

Like it says in the example, this is where the magic happens! Inside the `if` statement:

```
if (QS == true){
.
.
.
}
```

You can add your own code to do something when a heartbeat occurs.

### Exposing the BPM

The `BPM` variable is automatically updated with the beats per minute that are detected by the sensor. Unfortunately, we can't just do this in the `setup` function:

```
void setup() {
  // ...other stuff
  Particle.variable("bpm", BPM);
}
```

When you try compiling it, many errors occur. That's because the `BPM` variable is a _volatile_ variable. It can change due to an ISR that's part of the pulse sensor library. You can't expose volatile variables. The good news is that we can do a quick hack.

First, add a variable called `myBPM` and expose that instead:

```
int myBPM = 0;

void setup() {
  // ...other stuff
  Particle.variable("bpm", myBPM);
}
```

Now inside of the loop, just copy the `BPM` variable to the `myBPM` variable when a heartbeat happens:

```
void loop() {
  if (QS == true) {
    // ..other stuff
    myBPM = BPM;
  }
}
```

### Try This

- Get a buzzer to send a beep when a heartbeat happens
- Get the buzzer to give a warning when your heartbeat drops too low or rises too high
- Get the buzzer to have a higher pitched beep depending on how fast your heartrate is