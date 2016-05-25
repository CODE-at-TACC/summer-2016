# Swarm Robotics

### Introduction

[Swarm robotics](https://en.wikipedia.org/wiki/Swarm_robotics) is a field of study in robotics where:

- Each robot is physically and behaviorally the same
- Robots are simple in design and logic
- Adding more robots to a swam increases its ability to do a task or accomplish some other type of emergent behavior
- There is no "lead" robot or "overseer"

Think of a team of humans, such as a sports team or a construction crew. Humans tend to specialize, with each member possessing a complex set of abilities and a specific task within a larger goal. This is very different than a colony of [ants](https://en.wikipedia.org/wiki/Army_ant). Each individual member of an ant colony is very simple and not capable of complex thought or interaction. However, a large group of them is capable of creating [emergent behavior](https://en.wikipedia.org/wiki/Emergence).

### Disaster Response Robotics

For this project, your robots will be placed in an area where a human (represented by a heat source) is trapped behind a field of debris (represented by tennis balls.) Each group will place their robot in the pen, and the sum of all robots will act as a swarm.

At the beginning of each test of the task, the tennis balls will surround the heat source and robots will start randomly placed around the disaster site. All tennis balls must be moved to the boundary of the disaster site farthest away from the heat source.

### One Firmware, Multiple Robots

Each group will be responsible for developing a simple swarm behavior firmware, that will be simultaneously flashed to all robots in the swarm. When you have created a firmware that you would like to test, download the firmware binary and give it to your instructor. The instructor will flash the firmware across the entire swarm and you can watch it accomplish the task.

### Nuts and Bolts

TL;DR - Solving a swarm robotics problem is very different than solving a specialized robotics problem, and it requires different approaches. We will use the Particle.io Mass Flash tool to flash the firmware.

_*Swarms vs. Individuals*_

Traditional robotics education is typically based around a single robot with a large capability set and complex behaviors, such as a single Lego Mindstorms with multiple actuators. This model works well for the education setting because students get to express individualized creativity with a single robot and there is a clear connection between a program and an accomplished task. Students can also anthropomorphize an individual robot.

Swarms are typically not taught in schools because the field of study is very new, deploying firmware to a swarm can be difficult, and achieving emergent swarm behavior requires very different thinking. However, swarm robotics will play an increasing role in daily lives with, especially as the field of nanorobotics develops and swarm behavior will be required to solve problems in biomedical engineering.

_*Mass Flash*_

The [Particle.io Mass Flasher](http://code.tacc.utexas.edu/particle-mass-flash) tool was written specifically to address the need to flash one firmware to multiple Particle.io devices in a swarm robotics application. Each device may be tied to a different account, and you only need to record the device IDs and access tokens from each account in a .json to configure the flasher. The Build IDE provides the ability to download a `firmware.bin` file, which you can then deploy the every device listed in the .json file using this tool.

_*Swarm Programming Methods*_

Swarm programming is often more trial-and-error and evolutionary in nature, rather than with intentional design and error correction. Have students try implementing these simple behaviors and observing the results:

- Spin in place
- Spin in a larger circle
- Go away from a wall, return to the wall
- Go toward the heat, go away from the heat

Notice that each "algorithm" is very simple. The combination of the large mass of robots will achieve behavior greater than what an individual can accomplish. Also note that it is extremely difficult to "capture" a tennis ball or detect another robot. This is intentional - acquiring an object or detecting another robot would be complex behavior, as far as these robots are concerned.

_*"Genetic" Algorithms*_

While this is not a true [genetic algorithm](https://en.wikipedia.org/wiki/Genetic_algorithm) exercise, your class may wish to try a "genetic" approach. Here is a simple explanation of genetic algorithms:

- There is a task, for which success is measurable and quantifiable
- Many different random behaviors are chosen and tested for success
- Those that are more successful have some of their elements selected for cross-breeding with other successful algorithms
- Some new randomness is added to the next generation of algorithms
- The process is repeated many times until success is achieved

Believe it or not, this works in computer science. As far as the swarm robotics programming is concerned, this is an appropriate approach given the constraints of the robots. Your class structure may work like this:

- Your class decides on a metric for success.
- Each group tries a simple behavior, such as spinning in place or running towards and then away from the heat.
- Everybody tries their swarm firmware and measures it for success
- Those that are most successful combine some element of their approach with an element of someone else's approach
- Those that are not successful adopt a successful group's approach
- Everybody adds something small to their firmware or tries modifyng one or two parameters
- The process is repeated