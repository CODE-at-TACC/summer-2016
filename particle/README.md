# Particle.io

[Particle.io](http://www.particle.io) is the Internet of Things platform used for CODE @ TACC. It's very similar to Arduino. We chose this platform because of its cloud integration and ability to publish and subscribe to events and data. 

### Cool features

Here's some [sample source code](./test_firmware/firmware/firmware.ino) for a simple Particle.io project.

- ```Particle.variable("countVar", count))``` makes the variable ```count``` readable over the Internet. 
- ```Particle.function("setCount", setCount))``` allows you to activate the function ```setCount``` over the Internet.
- Your Particle.io device can listen for events published from anywhere over the Internet, meaning you can even integrate your device with Facebook, Twitter, etc.

### This section

- [Setup](./SETUP.md)
- [How it Works](./HOW.md)