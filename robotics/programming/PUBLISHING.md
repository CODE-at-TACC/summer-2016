# Publishing Events

** YouTube Dashboard **

### Introduction

For this project, use the ```3_publish.ino``` example firmware.

Your Particle.io devices can publish events to the web, which others can subscribe to and "listen" for.

Login to the [Particle.io Dashboard](https://dashboard.particle.io). On the left side of the page, you should see a "logs" icon. Click on that. Now reset your Particle.io robot controller and see what happens. 

What you just saw was your robot publishing an event that it came online. Your robot can also publish custom events. 

### ```Particle.publish```

The ```Particle.publish``` function built in to the Particle.io platform allows us to publish custom events. In the ```setup()``` function, look for this line of code:

```
Particle.publish("hello");
```

When this line of code is run, you should see that event published in the Dashboard. Try it out, then we're going to use custom events to create a motion detector that texts you.

### [IFTTT](https://ifttt.com) (If This Then That)

[IFTTT](https://ifttt.com) is a website that can subscribe to (among lots of other things) Particle.io published events and send notifications to (among lots of other things) email. View this video to see how to use IFTTT to listen for a "motion" event.

** Video: Setting up IFTTT **

### Testing it out

Sometimes it's important just to try publishing the event manually to see if IFTTT works. Modify the ```Particle.publish``` call in ```setup``` so that it publishes ```"motion"``` instead of ```"hello"``` and see if your IFTTT works.

### But what about the "if" part?

We want our event to publish only when motion is detected. How are you going to determine that? Are you using a heat sensor? An Ultrasonic sensor? When you read the sensor, you store the contents in a variable. Let's modify your loop.

```
void loop() {
  temperature = thermopile.readObjTempC();
  
  // Add this code here
  if (temperature > 100) {
    Particle.publish("motion");
  }
  
  // Modify the delay
  delay(5000);
}
```

The structure that you see is an ```if``` statement. It allows your robot to make a decision, based on whether or not the temperature is greater than 100 degrees Celsius.

This is probably wrong. 100 degrees Celsius is the temperature of boiling water...

### Try This

- Find a more reasonable value for your temperature sensor.
- Can you add additional code to use the Ultrasonic sensor? [There's the reasonable possibility that someone is trying to sneak by your heat sensor in an insulated Neoprene body suit](https://5wordmoviereviews.files.wordpress.com/2012/12/sneakers_aykroyd_redford_poitier.jpg).

### Nuts and Bolts

TL;DR - Pub/sub is a design pattern frequently used for modern device device communication, like when you get a Facebook or Instagram notification.

_*Design Patterns*_

Programmers like to use [design patterns](https://en.wikipedia.org/wiki/Design_pattern) - reusable solutions to a problem. A problem that sometimes exists is that an event might happen that some people need to know about, but not everybody. (Only those people who actually care.) For example, if someone posts an Instagram selfie of themselves, only the people who actually care should get a notification on their phone. 

To solve this problem, we use a design pattern called [Pub/sub](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern), which stands for "Publish/Subscribe." Your followers "subscribe" to your Instagram feed. When you "publish" a selfie, the Instagram server knows who has subscribed to your Instagram feed and sends them your published selfie.

_*Event Publishing and Webhooks*_

It is possible to register a [Webhook](https://docs.particle.io/guide/tools-and-features/webhooks/) on the Dashboard. This is a powerful way of extending event publishing to any service that has a RESTful interface. You can include data while publishing, and this will allow your Photon to send data to any REST endpoint on the web. As an example, the Particle.io guide on Webhooks shows how to publish data to a REST service called [Librato](https://www.librato.com/), which can track and graph your published event data. This could be useful something like an IoT temperature grapher using the Photon.

_Event Rate Limiting_

Event publishing is limited to 60 events every 2 minutes. This doesn't mean that the events are limited to once every 2 seconds - you could, in theory, publish 60 events in the first 10 seconds and then Particle.io would reject events for the next 110 seconds. That's why it's advisable to put a delay in the ```loop``` function when publishing.