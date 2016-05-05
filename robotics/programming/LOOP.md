### ```loop```

** TODO: YouTube demonstration **

We're going to start modifying your firmware. In your code, you will find a section called ```loop``` that is bounded by curly braces: 

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

TL;DR - The ```loop``` function isn't a true loop, but that's okay. Students learn how to call a function and alter a parameter by modifying what they see and experimenting. It's a good way for students to learn. 

_```loop``` Isn't Really a Loop!_



_*Functions and Parameters*_

Students will end up seeing that every "command" requires parentheses and a semi-colon. You can make the distinction between code that is a command for the controller (as denoted by a semi-colon at the end of the line) and code that is the structure of the commands (as denoted by curly braces.)

Later on, we will get into the habit of always using curly braces for every flow-control structure. It's a good habit.

_*The Copy/Paste Approach*_

Many coding curriculum models from the early days of programming ([the dark ages of console programming](https://historysshadow.files.wordpress.com/2014/05/dark-ages.jpg)) have students typing "Hello World" and repeating the actions of their instructor. While there is some value to rote learning, this curriculum takes an exploratory "top-down" approach. The implementation of most the functionality that students will use is abstracted from their view. Along those same lines, the nitty-gritty details of the purpose of each part of a function call isn't explained until the students first see their utility. Nothing is written from scratch.

Is it important for a student to be able to create a complex code structure from memory, such as write a function in C++ from scratch? Even professional programmers typically begin work in a new language by modifying pre-existing structures. Consider a professional programmer working with dozens of different languages across their entire career. What does a function definition look like in Python? Ruby? Lua? Or a Javascript AMD loader compatible function that is actually a dictionary class with private, public, instance and prototype scoping? The modern programmer inevitably does some cutting and pasting. Knowing the important parts of a function header are more important than the specific syntax. If we were using an IDE with code generation, the function header would be automatically generated for us.

Therefore, at this basic level of making a function call, students are simply testing the boundaries of stimulus and response, which is what all children do anyway.