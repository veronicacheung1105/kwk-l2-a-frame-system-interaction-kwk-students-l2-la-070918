## Objectives

1. Explore one way to manage components with a `system`
2. Create an interactive project using A-Frame collisions

## Overview

Let's build a simple game! We will use JavaScript to control the system that drives our gameplay. First, we will take a step back and re-organize code we used in the previous lab to better make use of the A-Frame library. Before we begin, let's take to talk about the challenges we face as programmers.

## Programming Obstacles

Early on in learning programming, you will likely find that most of your time is taken up understanding the general, and language specific, ways programming works. Syntax, environment management, and execution flow will be (rightfully so) major time sinks to become comfortable with. As is true when learning math, competency in some areas opens up the door to address more abstracted problems that can be solved with computation. Consequentially, the obstacles you face when writing programs change as well. As you continue to improve as a programmer, and _especially_ as your programs grow, more of your time will be taken up with considerations around [how you structure your applications][software-architecture]. If we aren't careful, we can end up in a position where, in order to add a new feature to a program, we need to rewrite some of the foundations of our code. Our code becomes constricted, just like Bernice here:

<p align="center">
  <img src="https://media1.giphy.com/media/FCc0IevruPsRi/giphy.gif"/>
</p>

In the [previous lab][previous-lab], we mostly 'hacked' our way through a program structure to render the spheres on the screen. In this lab, we will refactor our existing code to be more in-line with the A-Frame framework's suggested way of structuring code. We are doing this because it reduces the burden on us to make decisions on how to structure the more intangible aspects of our program.

At this point, we can trust that the A-Frame team's structural solutions are better than what we would come up with on the fly. Not only are they intimate with the source code itself, they also have experience with A-Frame applications that need to grow and therefore need to implement certain structures early on to ensure 'growth' doesn't mean 'rewrite'. Let's get started!

## Leveraging the A-Frame Library





## Add physics

## Add Game Play


[software-architecture]: "https://en.wikipedia.org/wiki/Software_architecture"
[previous-lab]: "https://github.com/learn-co-curriculum/entity-component-system"
