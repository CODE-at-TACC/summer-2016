# Setting up your Particle.io Device

### Introduction

You can setup your Particle.io device using their phone app. Alternatively, you can use the Particle Command Line Interface to do a manual setup.

####[YouTube: Particle CLI and Setup](https://youtu.be/JuAFk4Z3A8U?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

### Requirements

The Particle.io Photon requires WiFi. More importantly, it requires an unfiltered connection to spark.particle.io on port 5683 and it doesn't support WPA2 Enterprise Wifi. For this curriculum, you can use the [Build IDE](http://build.particle.io) to code and the [Dashboard](http://dashboard.particle.io) to monitor your devices. Optionally, you may wish to install [Node.js](http://node.js.org) and the [Particle CLI](https://docs.particle.io/guide/tools-and-features/cli/photon/).

### Claiming Your Device

The easiest way to setup your device is with the Particle.io app on a mobile device. After that, you may wish to check to see if it's online. You can determine this by looking at the blinking status LED and consulting Particle's [Device Modes](https://docs.particle.io/guide/tools-and-features/cli/photon/) webpage. If it the app does not work for you, you may use the Particle Command Line Interface.

### Nuts and Bolts

TL;DR - If you can't get your device to work with your WiFi or you did something really bad to it (like cut off power during a firmware flash) then you can do everything manually from your computer using the _Particle CLI_.

_*Setup node.js*_

Node.js is a programming language and framework based around Google Chrome's Javascript engine - except it doesn't run in a browser. You can get it and install it from [nodejs.org](http://www.nodejs.org). Once you have it installed and can open up a terminal window, you're good to go.

_*Install the Particle CLI*_

Install the _Particle CLI_ (Command Line Interface) using the terminal command: ```npm install -g particle-cli```. You can test to see if it worked by using the terminal command: ```particle login```. Once that works, you can browse the [Particle.io documentation about the Particle CLI](https://docs.particle.io/guide/tools-and-features/cli/photon/).

_*Manually Connecting to WiFi*_

I've found that sometimes the WiFi setup via the mobile app doesn't work well. To set it up manually:

- Plug in your device via USB cable
- Put it in WiFi listening mode by holding down the ```SETUP``` button until it starts blinking blue
- Run the terminal command ```particle setup wifi```
- When asked if you want to scan for access points, skip it and enter in your WiFi information manually

_*Manually Flashing Firmware*_

Sometimes, you will write firmware that has some serious problems and puts the Photon in a state where it won't flash via the web-based Build IDE. Other times, you may find yourself wishing to use a better editor or have finer control over some of the libraries. This may require you to manually compile and flash your Photon.

You will need to have [```dfu-util```](http://dfu-util.sourceforge.net/) installed for your platform.

Once that's taken care of, use your terminal to navigate to this folder. One of the subdirectories will be named ```tinker``` and it contains Particle.io's _Tinker_ firmware source code.

- If you are using a Particle.io Photon (used in the Wearables curriculum), compile the firmware using the terminal command ```particle compile photon tinker --saveTo firmware.bin```. If you are using a SparkFun Photon Redboard (used in the robotics curriculum), compile the firmware using the terminal command ```particle compile p1 tinker --saveTo firmware.bin```
- Connect your Photon via USB and put it in recovery mode by first holding down both the ```SETUP``` and ```RESET``` buttons, then letting go of ```RESET``` and keeping ```SETUP``` held down until the status LED blinks yellow. This is DFU (Device Firmware Upgrade) mode.
  - If this doesn't work and you're using OSX or Linux, you can manually put it in DFU mode. First you'll need to determine the devicename, with the terminal command
  ```particle serial monitor```. You'll get a response that looks like ```Opening serial monitor for com port: /dev/cu.usbmodem31"```. Hit ```Ctrl-C``` to exit the serial monitor and type in ```stty -f /dev/cs.usbmodem31 14400```, substituting in your device's specific port name.

- Flash the firmware with the terminal command ```particle flash --usb firmware.bin```
