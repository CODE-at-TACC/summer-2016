# Robotics

### Introduction

This curriculum will cover:

- Robotic mechanical systems
- Basic C++ programming
- Sensor input
- Cloud interactions
- Individual and swarm robot logic

####[YouTube: CODE @ TACC Summer 2016 playlist](https://www.youtube.com/playlist?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

### This Section

- [Assembling Your Robotics Kit](./ASSEMBLY.md)
- [Robotic Systems](./COMPONENTS.md)
- [Modifying the Firmware](./LOOP.md)
- [Adding New Functions](./FUNCTIONS.md)
- [Exposing Functions](./EXPOSING.md)
- [Football Time!](./FOOTBALL.md)
- [Reading Sensors](./SENSORS.md)
- [Publishing Events](./PUBLISHING.md)
- [Subscribing to Events](./SUBSCRIBING.md)
- [State Programming](./STATES.md)
- [Servos](./SERVOS.md)
- [Swarm Robotics](./SWARM.md)

### Nuts and Bolts

TL;DR - At CODE @ TACC, we use exploratory learning, pair programming, and we verify all code after every line to reduce syntax errors.

_*Learn By Experimentation*_

Programming languages are arbitrary systems. Young people tend to be good at learning "games" - that is to say, they learn through experimentation and quickly determine the rules and boundaries of a system and what they can do with it. Therefore, instead of a "Hello World" and "type this line of code" approach, we tend to use an exploratory "try this" and "what happens?" approach.

_*Pair Programming*_

Pair programming is a paradigm used in industry where you may have some extremely complex code that requires a second set of eyes. The way it works - one programmer sits as the keyboard and the other programmer tells them what to do. It's like a [captain and the helm of a ship](http://www.thebeeskneesdaynursery.com/caption/caption139a.jpg). The _helm_ doesn't do anything until the _captain_ tells them what to do. The advantage is that the helm gets to question the captain's orders if they don't believe the code is going to work. On the surface, you may think that this wastes the time and effort of two programmers to do the job of one programmer. However, in many situations it means that code will be error free because you have a second set of eyes on the code. 

In a classroom environment, it means that you can generate a number of interesting dynamics with students. With an experienced _captain_ and a more novice _helm_, it means the captain can use this opportunity to teach the helm. I typically have the students trade off every [5 minutes](https://www.google.com/#q=5+minute+timer). One thing required for this to work, however, is that the more experienced programmer must be "benevolent", in the sense that they don't become the helm and just drive the boat themselves. To this end, we also try to assign partner pairs that are similar in skill level.

_*Verify After Every Line*_

Because the Build IDE doesn't have code completion or Intellisense, we instruct our students to compile after every line of code. It's easier to correct a syntax error when it happens, rather than correct a bunch of syntax errors that are piling up. Verification (which is actually compilation) doesn't happen locally in the Build IDE, which means it costs the programmer absolutely nothing to verify every line of code.