### `loop`

** TODO: YouTube demonstration **

We're going to start modifying your firmware. In your code, you will find a section called `loop` that is bounded by curly braces: 

```c
void loop() {
// some stuff
}
```
Try modifying the lines within the curly braces to make your robot do something different. Make one modification at a time. Verify the code and then flash it before moving on. If you are pair-programming, change partners between each modification.

_*Some Questions:*_

- What types of modifications did you try, and how did you do them?
- Were any of your modifications "unsuccessful"? If so, how did you correct them?
- What were the effects of your modifications?

### Nuts and Bolts

TL;DR - The `loop` function isn't a true loop, but that's okay. Also, students learn how to call a function and alter a parameter by modifying what they see and experimenting. It's a good way for students to learn. 

_`loop` Isn't Really a Loop!_

In "sketch" style programming frameworks like [Processing](https://processing.org/), there is typically a `setup` function and a `loop` function that runs continuously. Typically, firmware programmers avoid using traditional `while` loops into their code. This has two and a half purposes. 

The first is that the `setup`/`loop` structure is easy for novice programmers to understand those paradigms without having to write complex syntax.

The second reason is for stability. Field deployed hardware typically can't receive software updates. In traditional `while` loop syntax, it's surprisingly easy to write an infinite loop. In fact, the [Jet Propulsion Laboratory Coding Standards](http://lars-lab.jpl.nasa.gov/JPL_Coding_Standard_C.pdf) for flight control systems prohibits loops that are not _predictably finite_ (guaranteed to end). In otherwords, no `while` loops. You don't want to risk having a space probe or a launch vehicle with an infinite loop, do you?

The second-and-a-half reason it related to reason number two. Many firmwares are built with background code running that you are not privy to. There may be [watchdog timers](https://en.wikipedia.org/wiki/Watchdog_timer) and other mechanisms that are silently added to your code when you compile it. In the case of Particle.io, all of the cloud functions are automatically added to your project firmware, and they require the `loop` to finish doing its business in a reasonably short amount of time. For that reason, if you write an actual `while` loop, you risk crashing the firmware.

_*Functions and Parameters*_

At this basic level of making a function call, students are simply testing the boundaries of stimulus and response, which is what all children do anyway.

Students will end up seeing that every "command" requires parentheses and a semi-colon. You can make the distinction between code that is a command for the controller (as denoted by a semi-colon at the end of the line) and code that is the structure of the commands (as denoted by curly braces.)
