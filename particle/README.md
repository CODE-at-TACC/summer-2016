# Particle.io

[Particle.io](http://www.particle.io) is the Internet of Things platform used for CODE @ TACC. It's very similar to Arduino. We chose this platform because of its cloud integration and ability to publish and subscribe to events and data. Cool features:

- Make variables on your device available to read via the web
- Make functions on your device callable from the web
- Publish events from anywhere, that your device can subscribe to and listen for

### Requirements

The Particle.io Photon requires WiFi. More importantly, it requires an unfiltered connection to spark.particle.io on port 5683 and it doesn't support WPA2 Enterprise Wifi. For this curriculum, you can use the [Build IDE](http://build.particle.io) to code and the [Dashboard](http://dashboard.particle.io) to monitor your devices. Optionally, you may wish to install [Node.js](http://node.js.org) and the [Particle CLI](https://docs.particle.io/guide/tools-and-features/cli/photon/).

### Claiming Your Device

The easiest way to setup your device is with the Particle.io app on a mobile device. However, it's possible to set it up using the Particle CLI. After that, you may wish to check to see if it's online. You can determine this by looking at the blinking status LED and consulting Paritcle's [Device Modes](https://docs.particle.io/guide/tools-and-features/cli/photon/) webpage. For simplicity, you may want to set up one account for all devices.

### [Build IDE](http://build.particle.io)

The Build IDE provides a convenient way to write code and access libraries tailored to Particle.io. Feature-wise, it's about on par with the Arduino IDE if you are familiar with that. It does not, however, provide serial monitoring capabilities. If you wish to monitor your device by serial, you must use the Particle CLI.

### [Dashboard](http://dashboard.particle.io)

The Particle.io Dashboard allows you to view live events, running devices and web integrations for your device.

### [`explorer`](./explorer)

The `explorer` webpage is a client that can read the state of Particle.io device variables and trigger device functions. It must be hosted on a web server to use. If you have [python](http://www.python.org), you may launch a simple web server for the `explorer` page from a terminal by typing `python -m SimpleHTTPServer` in the `explorer` directory. Then simply browse to [http://localhost:8000](http://localhost:8000).