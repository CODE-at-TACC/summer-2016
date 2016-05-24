# State Programming

### Introduction

There are many ways of programming a robot to accomplish a task on its own. Sometimes, we refer to machines that can make decisions on their own as having "artificial intelligence."  Artificial intelligence takes on many forms. It doesn't necessarily mean that a machine is capable of [extremely complex decision making](http://vignette2.wikia.nocookie.net/pixar/images/c/ce/Wall-E_Cubecolors.jpg/revision/latest?cb=20090615011459). We're going to explore one way of setting up an artificial intelligence. It's called a [state machine](https://en.wikipedia.org/wiki/Finite-state_machine).

** TODO: YouTube on state machine **


### Finite State Machines

Finite State Machines, or FSMs for short, are a way of representing a state of being transitions to other states of being. Here's a simple example:

![Example Finite State Machine](./fsm.png)

- Each circle is a state of being
- Each arrow represents something that can happen that causes a transition to a different state
- The `v` shaped carat next to the `hiding` state means that this is the starting state
- The double circle labelled `running` means that this is the ending state.

You can think of this diagram like a narrative for a robot that hides from danger. It starts out in the `hiding` state. While it is hiding, it can't see anything, only listen for _`noise`_. Let's say a `noise` happens. This causes a transition to the `peeking` state, where it comes out of hiding to look for danger. If it's _`all clear`_, it returns to `hiding`. If there is _`danger!`_ it starts running. Notice that it can't respond to _`danger!`_ while it is `hiding`, nor can it respond to additional _`noise`_ while it is `peeking`. 

### Writing State Machine Firmware

Start a new app using the `5_states.ino` example in the `codetacc-robotics` library. Here's what the FSM for this firmware looks like:

![5_states.ino FSM](./5_states.png)

Find the `State functions` section of the firmware code and look at the first function:

```
void waiting() {
  stop();
  distance = ultrasonic.readCm();
  if (distance > 150) {
    state = driving;
    Particle.publish("state", "driving");
  }
}
```

This is the `waiting` state. When you _implement_ the logic of the FSM, you have to translate it into code that "gets the job done." Notice a couple things:

- `stop();` means that in this state, the robot will not move.
- Immediately after `stop();`, you see that the firmware is taking a distance reading. This is how we will determine if _`nothing is in front of me`_
- We use the `if (distance > 150)` to make that decision. If the condition is true, notice that there is a line that says `state = driving;`. This is what causes the state to change to a different function. Additionally, we publish an event saying that the state has changed at this time. (We only want to publish if the state actually changes!)

### Is that it?

Well, almost. 

First, look at the section called `Function prototypes`. It has a list of what looks like function definitions, but they don't have curly braces.

```
int forward(String);
int left(String);
int right(String);
int stop(String);

void waiting();
void driving();
```

The reason is that C++ is a _top-down compiled language_. Basically, you can't refer to a function until it's written. To get around that, we use a _prototype_ - a promise to the C++ compiler that we will, at some point, have a function with a specific name. ("Listen up, C++. We _promise_ that you will have a [puppy named Max](https://i.ytimg.com/vi/Ez2OSSgCMlM/maxresdefault.jpg), when you're old enough to handle the responsibility.") The important part is that you create a prototype for any states that you will be creating in this section.

Next, look at the `setup()` function. There's a line that says:

```
void setup() {
  // some stuff
  
  state = waiting;
}
```
This is what sets the starting state. There _must_ be a starting state.

Now look at `loop`:

```
void loop() {
  state();
  delay(1000);
}
```

This is what causes the state machine to run. You shouldn't need to modify this. It simply means that your firmware will execute the currently assigned state.

### Heat Seeker!

You're going to program your robot to avoid walls and look for a heat source. When it has found the heat source, it should publish an event. The first task will be to create an FSM diagram. Act out the diagram to make sure that your logic works. Once you do that, you can code your program to go find a heat source. Remember - it can't bump into walls!

### Nuts and Bolts

TL;DR - We use a small personal heater for the heat source at CODE @ TACC, because our offices are really cold. Also, there's a function pointer in this example code.

_Seeking Heat_

Acting out the FSM is critical to student success. It allows the students to quickly determine if their FSM works as intended. Coding a poorly written FSM is time consuming, and correcting the code because the logic wasn't correct in the first place is not an efficient use of time.

The Thermopile sensor functions by sensing infrared radiation, but what it reads as "heat" in degrees Celsius is extremely dependent on distance from a heat source. In addition, the value returned by `readObjTempC` will vary immensely based on your heat source. Therefore, it may be helpful to compare it with the result of `readDieTempC`, which will return the temperature of the sensor itself. It's a good "reference" temperature. If `readObjTempC` is signficantly greater than `readDieTempC`, the Thermopile sensor is looking at the heat source.
 
Finally, you may wish to have the students try saving the "maximum" heat difference sensed in an additional variable. That way it can identify the hottest heat signature that it found.

_Function Pointers_

C++ function pointers are variables that point to code to be executed. There isn't really an equivalent in Java, which is why many programmers find Java to be extremely tedious to use. Java tends to use interfaces to get the job done. Programming an Android application in Java typically means that programmers end up creating classes that implement an interface with one function, or they do it with an _anonymous inner class_. Basically, Java suffers because you can't simply assign a function to a variable. Here's what that might look like in Java:

```
button.setOnClickListener(new ButtonClickListener() {
    public void onClick(Event e) {
    	// do stuff
    }
});
```

Being able to assign functions to variables is a core functionality of other languages like Python and Javascript. Here's what the above code might look like in Javascript:

```
function onClick(e) {
  // do stuff
}

button.onClickListener = onClick;
```

The syntax for a function pointer in C++ is, unfortunately, a little bit intimidating. It's really not that bad, though.

```
void (*state)();
```

That's the function pointer variable. Breaking it down, it means the following:

- `void` the function is a `void` function type. (As opposed to an `int` function type, which might return an `int` value.)
- `(*state)` the variable is a function pointer, and the variable's identifier is `state`.
- `()` the function pointer points to a function that has no parameters.
- `state` can be assigned to a function that has a prototype like `void myfunction()`.

Finally, here's the big important hint. There is a big difference between assigning a function to a function pointer, and assigning the _result of a function_ to a function pointer.

`state = waiting;` will assign a function named `waiting` to the function pointer `state`.

`state = waiting();` will cause the `waiting` function to execute and then assign the result to `state`. _Don't do this. This won't work and will crash your firmware. You will know your firmware has crashed because it is flashing a [red SOS in Morse Code](https://docs.particle.io/guide/getting-started/modes/photon/#red-flash-sos)._