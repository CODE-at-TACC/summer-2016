# Software Tools

_*[Build IDE](http://build.particle.io)*_

The Build IDE provides a convenient way to write code and access libraries for Particle.io. If you have experience with Arduino, it's very similar to that.

_*[Dashboard](http://dashboard.particle.io)*_

The Particle.io Dashboard allows you to view live events being published by your devices.

_*[`explorer`](http://code.tacc.utexas.edu/particle-explorer)*_

The `explorer` web app allows you to conveniently access Particle.io cloud functions. Specifically, you can read device variables, call device functions and publish cloud events.

_*[`mass-flasher`](http://code.tacc.utexas.edu/particle-mass-flash)*_

The `mass-flash` web app allows you to flash multiple devices with the same firmware at once. If you have a dozen devices that are physically identical and all need the same firmware, you can use this tool to flash the devices quickly.


### Nuts and Bolts

TL;DR - You may soon outgrow the Build IDE and your projects may extend beyond the Photon itself. Here are some additional tools you can use.

_[Particle Dev](https://www.particle.io/dev)_

Particle Dev is an editor based off of GitHub's Atom. It has some code completion and integrated tools for flashing your Photon. It's not as fully featured as IDEs for other languages, especially those that feature [Intelligent Code Completion](https://en.wikipedia.org/wiki/Intelligent_code_completion) or serial monitoring, but it's definitely a step up. And it's free.

_[GitHub](https://github.com/) and [GitHub Desktop](https://desktop.github.com/)_

You're browsing this curriculum on GitHub. Git is a [version control](https://en.wikipedia.org/wiki/Version_control) system that allows you to save incremental source code changes, track these changes, and collaborate with others on the same project. GitHub is the most well known commercial Git server, with a searchable web interface and numerous open source projects like this one. If you do any extensive project work, you will want to use GitHub.

Because the terminal commands that comprise standard Git can be [somewhat confusing](https://xkcd.com/1597/), [GitHub Desktop](https://desktop.github.com/) has been created to streamline this process. 

Here's a [good video on using GitHub Desktop](https://www.youtube.com/watch?v=BKr8lbx3uFY).

A workflow that I use with my students:

- Create a basic project for my students, for them to fork
- My students will create working branches of their fork master branch, especially if they are working on a team
- Each teammate makes commits, etc. to their local working branch copy
- Each teammate submits a pull-request when they are done with a feature, for merging into their fork master

_Particle Cloud API_

There are other ways of interacting with the Particle Cloud API. For example, [`explorer`](http://code.tacc.utexas.edu/particle-explorer) and [`mass-flash`](http://code.tacc.utexas.edu/particle-mass-flash) are built using the [Javascript Software Development Kit](https://docs.particle.io/reference/javascript/). There are other development kits for [iOS](https://docs.particle.io/reference/ios/) and [Android](https://docs.particle.io/reference/android/) if you wish to develop apps that can interact with your Photon. However, all three are simply designed to provide a neatly packaged way to interact with Particle.io's [REST Cloud API](https://docs.particle.io/reference/api/).