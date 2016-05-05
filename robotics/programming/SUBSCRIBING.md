# Subscribing to Events

### The DO Button

IFTTT has an app called the DO Button for [Android](https://play.google.com/store/apps/details?id=com.ifttt.dobutton) and [iOS](https://itunes.apple.com/us/app/do-button-by-ifttt/id905998610). We're going to use it to publish an event that you can listen for.

** YouTube DO Button **

### What to actually "do"

First we need a _handler_ for your event. Let's add a simple function that makes your robot drive forward.

```
void handler(const char *event, const char *data) {
  forward();
  delay(1000);
  stop();
}
```

This function header looks... a little complicated. That's okay for now. Let's test it out by adding it to the ```setup``` function.

```
void setup() {
  // ...all the other stuffs

  handler(NULL, NULL);
}
```

Test it to make sure it actually runs.

### Subscribing to an event

Now let's have it run only when a certain event is published. This is called _subscribing_ to the event. Replace your call to the ```handler``` function in ```setup``` with the following code:

```
void setup() {
  // ...all the other stuffs
  
  Particle.subscribe("gogogo", handler);
}
```

Now your robot will run the code when it receives the event ```gogogo```. But how do we publish this event? Try using [```explorer```](../../particle/explorer) to publish the event.

### DO Button

Now that you know this works, try setting up the DO Button to publish the ```gogogo``` event. (Hint: Use the Particle channel.)

### Nuts and Bolts

TL;DR - Event handlers use old school char arrays instead of the ```String``` class that Particle.io provides.

_const char *pointer_

What's this data type? It's an array pointer to an array of ```char``` data, with unknown length - basically, a String but more difficult to work with. It's the big headache of working with strings in C++. The event handler function accepts two Strings. When an event is received, it will pass call the handler function with an event name as the first parameter and associated data in the second parameter. The fact that they are qualified as ```const``` means that they can't be modified inside the function. Since it is a _pointer_, this means that the actual value of the variable ```pointer``` is a memory address to the start of the data in the Photon's RAM.

_char pointer strings in C++_

Strings in C++ are arrays of characters. Since the string may be of unknown length, they are typically _null terminated_. That is to say that the last character of the string will have a ```0``` numerical value to denote the end of the string. For example, the five character string _"puppy"_ would be represented by a six character array that internally looks like this:

```
{ 'p', 'u', 'p', 'p', 'y', 0 }
```

There are many standard functions in C++ meant to work under this convention of having a null terminating character, such as ```strlen```, which is how you find the length of a string.

_Enter the ```String``` class_

```char *pointers``` can be a headache to deal with for programmers that are new to C++. They are powerful, in that you can pull off all sorts of tricks like this:

```
char puppy[] = { 'p', 'u', 'p', 'p', 'y', (char)0 };
char *uppy = &some_string[1];
uppy[1] = 'l';
uppy[2] = 'l';
```

...but they are difficult to work with when you just want to get things done. That, and like many char pointers, you have the danger of allocating the space in memory and then never reclaiming it. These are called _memory leaks_ and all the char pointer arrays you allocate might fill up the memory of the Photon and cause it to crash.

Therefore, Particle.io created a ```String``` class that has a lot of built in functions, converts back and forth between char pointers, and is garbage collected so that you don't have to worry about crashing your Photon with a memory leak. An easier way of writing the handler function is to convert everything to a ```String``` first. 

Here's an example:

```
void handler(const char *event, const char *data) {
  String eventName = String(event);
  String dataString = String(data);
  
  if (eventName.startsWith("puppy")) {
    // You got a puppy!
  }
```

This is much more readable than the native C++ version:

```
void handler(const char *event, const char *data) {
  const char *puppy = "puppy";
  if (stncmp(data, puppy, strlen(puppy)) {
    // You got a puppy.
  }
}
```