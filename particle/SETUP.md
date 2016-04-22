# Setting up your Particle.io Device

### Requirements

The Particle.io Photon requires WiFi. More importantly, it requires an unfiltered connection to spark.particle.io on port 5683 and it doesn't support WPA2 Enterprise Wifi. For this curriculum, you can use the [Build IDE](http://build.particle.io) to code and the [Dashboard](http://dashboard.particle.io) to monitor your devices. Optionally, you may wish to install [Node.js](http://node.js.org) and the [Particle CLI](https://docs.particle.io/guide/tools-and-features/cli/photon/).

### Claiming Your Device

The easiest way to setup your device is with the Particle.io app on a mobile device. 

** TODO : YouTube video on claiming your device **

After that, you may wish to check to see if it's online. You can determine this by looking at the blinking status LED and consulting Particle's [Device Modes](https://docs.particle.io/guide/tools-and-features/cli/photon/) webpage. 

### [Build IDE](http://build.particle.io)

The Build IDE provides a convenient way to write code and access libraries for Particle.io. If you have experience with Arduino, it's very similar to that.

### [Dashboard](http://dashboard.particle.io)

The Particle.io Dashboard allows you to view live events, running devices and web integrations for your device.

### [`explorer`](./explorer)

The `explorer` webpage is a client that can read the state of Particle.io device variables and trigger device functions. It must be hosted on a web server to use. If you have [python](http://www.python.org), you may launch a simple web server for the `explorer` page from a terminal by typing `python -m SimpleHTTPServer` in the `explorer` directory. Then simply browse to [http://localhost:8000](http://localhost:8000).