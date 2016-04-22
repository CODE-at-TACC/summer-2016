# How it Works

### Development Boards

The Particle.io Photon is called a *Development Board*. Development boards are microcontrollers that are designed so that you may connect other electronics using convenient hook-up wire on a breadboard. The *MCU* (Microcontroller Unit) on the Photon can read and write electrical signals to each of its *pins*. You program it with *firmware*.

### Tinker

Photon has an example project called *Tinker*, designed to interact with the Particle.io app on your phone. Watch this video on how to flash *Tinker* to your Photon. ** TODO : Tinker video **

### Nuts and Bolts

TL;DR - this is how your Photon works. This is also how the Cloud works. Read this if you want to know exactly how the Particle.io cloud works, or if you're unfamiliar with the terminology _REST_, _Request Method_, or _Authentication_.

_*Cloud Integration*_

While the Tinker firmware (or any firmware that you flash) is running on your Photon, there's a lower level firmware running in the background that communicates with Particle.io's cloud services. It sends the state of any cloud variables to Particle.io and receives any events, such as a request to flash a new firmware. While the Photon's status LED is breathing cyan, it is connected to the cloud and exchange data, receive events, and be reflashed via the cloud.

_*Server, Client, Cloud*_

A server is a computer that receives requests for information and fulfills those requests, sometimes by connecting other computers or devices to each other. A client is an individual device, such as your Photon, requesting and sending information to a Particle.io server. It's called the cloud because:

- People used to draw diagrams with clouds to represent servers where the specifics were unimportant.
- Multiple individual servers may be fulfilling a client request, and the client only cares that someone or something is fulfilling the request.

_*REST*_

Many services on the Internet use a way of requesting and sending data called [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). When you browse the web, you visit URLs like the one at the top of your browser's navigation bar. However, the URL is only one part of the process. In addition to the URL, which represents *where* to get data from, your browser also makes the data request using a *method*, which is the *how* to get data. For example, when you visit Google, your browser uses the ```GET``` method to retrieve data from ```http://www.google.com```. 

_*RESTful Services*_

When you perform a Google search, you will frequently see your URL change to something like this:

```https://www.google.com/#q=code+%40+Tacc```

The search data has been embedded in the URL. It's somewhat unreadable, so some services are designed to conform to the _RESTful_ standard. This means that URLs will look "nice" and be processed to retrieve information dynamically. Other methods, such as ```PUT``` and ```POST``` allow additional data to be sent with the request. For Particle.io, this means that their web service may allow a request to a URL such as:

```https://api.particle.io/v1/devices/012345abcdef/countVar```

_*Authentication*_

If you tried to paste that in your browser, you will have encountered an error. Because the URL is fake. But also because even if it was real it would have required an access token. The Particle.io platform issues access tokens, which are like passwords but are unique randomly generated sequences of numbers and characters that also serve to identify a specific device or user. By providing the access token during a request, the Particle.io cloud is able to identify who is requesting the data and grant or deny access.

_*HTTPS*_

"But couldn't someone just intercept the access token and use it?" The answer is, yes. You must protect your access token. During transmission, your entire communication is encrypted from end to end when you request a URL using [HTTPS](https://en.wikipedia.org/wiki/HTTPS), if the server and the device support another protocol called SSL. Remember - simply pre-fixing your URL with HTTPS doesn't guarantee that your communication is encrypted. Both the server and the client must support it!