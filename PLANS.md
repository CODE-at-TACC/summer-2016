# Activities

Here are the activities that will be covered in this curriculum.

## Teacher Preparation

Each SparkFun Photon Redboard or Particle Photon needs to be tied to a user account. Each student group needs a separate user account, so that they may each have separate firmware code. If your students are using a class set of devices, you may wish to use the Particle CLI to speed up the setup process. In addition, you can record device IDs and keys for swarm flashing in the last robotics lesson.

[YouTube: Particle CLI and Setup](https://youtu.be/JuAFk4Z3A8U?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Setting Up Your Particle.io Device](./particle/SETUP.md)

## Robotics Lessons

### Assembling Your Robotics Kit 

_1 Hour_

_Summary:_

Students will assemble the robots and flash pre-written firmware using the Build IDE. 

_Objectives:_

- Students will be able to perform basic assembly of robotics components
- Students will understand the relationship between firmware and robot behavior

_Inquiry:_

The polarity of the robot's drive motors can be wired in either direction. What is the relationship between the motor polarity and what appears in the example firmware as written?

[YouTube: Assembling Your Robot](https://youtu.be/aCVczCflXvU?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[YouTube: Flashing Firmware](https://youtu.be/jQxIPMPA-wM?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Assembling Your Robotics Kit](./robotics/ASSEMBLY.md)

### Robotic Systems

_20 minutes_

_Summary:_

Students will discuss the qualities that constitute the definition of a robot and identify the different systems that make up robots. 

_Objectives:_

- Students will be able to identify applications of robotics
- Students will be able to classify functionality of robots
- Students will be able to classify robot components by their functional systems

_Inquiry:_

What qualities must a machine possess to be a robot? The definition becomes blurred once we consider the rapid pace of innovation. Does a drone qualify as a robot? What about an autonomous vehicle? What systems must be present for a machine to be classified as a robot?

[Google Slides: What is a Robot?](https://docs.google.com/presentation/d/1H6N3CCsyfkCy1GJbW_ZONWBHHcJF0fvD8DCrQ04cSak/edit?usp=sharing)

[YouTube: Components and Systems](https://youtu.be/ahPsGrApbpg?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Robotic Systems](./robotics/COMPONENTS.md)

### Modifying the Firmware

_30 minutes_

_Summary:_

Students will modify the example firmware's main loop. They will call functions that are defined in the firmware from within the loop. 

_Objectives:_

- Students will be able to identify basic C++ syntax for calling a function
- Students will be able to compile and flash code and correct syntax errors related to calling a function

_Inquiry:_

Students will modify the firmware loop by making modifications patterned on pre-existing code. They will modify the code line by line and observe the results of their modifications.

[YouTube: Modifying the Firmware](https://youtu.be/dmktLczVx-c?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Modifying the Firmware](./robotics/LOOP.md)

### Adding New Functions

_30 minutes_

_Summary:_

Students will create new functions for their robot by cloning and modifying pre-existing function headers. 

_Objectives:_

- Students will be able to write a function
- Students will be able to identify components of a function header
- Students will be able to differentiate between a function definition and a function call

_Inquiry:_

Students will experimentally modify functions patterned from ones that are pre-existing in the example firmware. By experimentation, they will identify components of a function header and function definition. They will create new functionality, such as the ability to spin and drive in reverse.

[YouTube: Functions](https://youtu.be/WyGnx9MCQ8E?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Adding New Functions](./robotics/FUNCTIONS.md)

### Exposing Functions to the Web

_30 minutes_

_Summary:_

Students will expose firmware functions to the cloud, so that they can control their robots using the [`explorer`](http://code.tacc.utexas.edu/particle-explorer) web app.

_Objectives:_

- Students will be able to expose cloud functions
- Students will be able to identify pre-emptive function calling
 
_Inquiry:_

Students will test cloud function calls to determine how a robot behaves when a cloud function call pre-empts the main robot loop. 

[YouTube: Exposing Functions](https://youtu.be/j1J5oLPaQ1I?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Exposing Functions to the Web](./robotics/EXPOSING.md)

### FOOTBALL TIME!

_90 minutes_

_Summary:_

Students will play a game of robotic football.

_Objectives:_

- Students will be able to implement group robotic algorithms that require individual specialization
 
_Inquiry:_

Students will perform team planning for the football game, identifying performance constraints of their robots and the challenges of specialized team interactions. Frequently, individual differences in robots (such as tire traction, motor strength, etc.) make it difficult to write highly specialized and coordinated algorithms.

[Textbook: FOOTBALL TIME!!!](./robotics/FOOTBALL.md)

### Reading Sensors

_60 minutes_

_Summary:_

Students will wire an infrared thermopile sensor, write firmware to read sensor data, store the data in a variable, and expose the variable. They will then apply those steps to connecting an ultrasonic range finder. They will add firmware code by analyzing the ultrasonic range finder example code and integrating it by parts into the firmware.

_Objectives:_

- Students will be able to identify and connect sensor breakout pins via breadboard
- Students will be able to identify the structure and purpose of sensor initialization and polling code
- Students will be able to create and expose a variable to the cloud
 
_Inquiry:_

After working with example code for the thermopile sensor, students will analyze example ultrasonic sensor code and integrate it into different sections of their firmware.

[YouTube: Wiring a Sensor](https://youtu.be/D07oKCR-klo?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[YouTube: Reading a Sensor](https://youtu.be/gwYqrcRRvNQ?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Reading Sensors](./robotics/SENSORS.md)

### Publishing Events

_60 minutes_

_Summary:_

Students will create a motion detector using either the thermopile sensor or the ultrasonic sensor. The motion detector will publish an event to the cloud. An IFTTT subscription to the cloud event will allow the motion detector to trigger a text message or e-mail alert.

_Objectives:_

- Students will be able to use an if statement to test for a sensor condition
 
_Inquiry:_

Students will experiment with sensor tolerances and behavior when creating their motion detector. They will explore different end-point interactions for the motion detector.

[YouTube: Publishing Events](https://youtu.be/j-P8RYhwk3c?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[YouTube: Creating an IFTTT Recipe](https://youtu.be/jvPUKNYHOAo?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Publishing Events](./robotics/PUBLISHING.md)

### Subscribing to Events

_60 minutes_

_Summary:_

Students will use a function handler to subscribe to events and respond to them. The IFTTT DO Button App will generate the event. Students will modify their motion detector to allow arming and disarming via phone app.

_Objectives:_

- Students will be able to use variables to maintain and modify machine state
- Students will be able to use nested if statements to control machine logic that requires testing more than one variable
 
_Inquiry:_

Students will have to determine how to maintain the machine state (armed or disarmed) and read the state to determine whether or not an alarm should be triggered. 

[YouTube: DO Button Handler](https://youtu.be/BEjuTmyvvRI?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: Subscribing to Events](./robotics/SUBSCRIBING.md)

### State Programming

_90 minutes_

_Summary:_

Students will diagram robotic logic using finite state machines. They will implement a robot that seeks a heat source and avoids walls.

_Objectives:_

- Students will be able to diagram logic using finite state machines
- Students will be able to implement a finite state machine using C++
 
_Inquiry:_

Students will create and test logic for the heat seeking robot. They must also determine tolerances for the heat and ultrasonic sensors, and identify special conditions when the sensors may return invalid data.

[YouTube: Finite State Machines](https://youtu.be/nFOjkE7S404?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[YouTube: Implementing Finite State Machines](https://youtu.be/pxaIyNbcPrA?list=PL6EGewlWkUIBzgkgeVXeXmx9rVw0wkJYB)

[Textbook: State Programming](./robotics/STATES.md)

### Swarm Robotics

_120 minutes_

_Summary:_

Students will create a robot swarm to clear a debris field and uncover a heat source. This simulates a disaster response robot swarm that "rescues" a human buried under "rubble." Rather than using an intentional approach (like the football project), students will use a "genetic algorithm" approach.

_Objectives:_

- Students will be able to solve a problem using a trial and error "genetic" approach

_Inquiry:_

Students will define success metrics and use experimentation and "algorithm breeding" to create a solution. This approach sometimes produces better results for robot swarm tasks, rather than creating specialized robot roles and algorithms.

[Particle.io Mass Flasher tool](http://code.tacc.utexas.edu/particle-mass-flash)

[Textbook: Swarm Robotics](./robotics/SWARM.md)