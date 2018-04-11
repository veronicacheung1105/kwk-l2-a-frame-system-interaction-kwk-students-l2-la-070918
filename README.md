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

In the [previous lab][previous-lab], we mostly 'hacked' our way through a program structure to render the spheres on the screen. In this lab, we will refactor our existing code to be (mostly) in-line with the A-Frame framework's suggested way of structuring code. We are doing this because it reduces the burden on us to make decisions on how to structure the more difficult parts of our program.

At this point, we can trust that the A-Frame team's structural solutions are better than what we would come up with on the fly. Not only are they intimate with the source code itself, they also have experience with A-Frame applications that need to grow and therefore need to implement certain structures early on to ensure 'growth' doesn't mean 'rewrite'.

That being said, this project bridges "A-Frame best practices" with "easy to interact with code". Let's get started!

## What We Have So Far

We already have a good amount of code and a fully working project ready for you. If you run your server and take a look at what we have in the browser, you should find the beginnings of a very mediocre game. We have a fixed camera behind a ball (representing the player) inside of the THUNDERDOME&trade;<sup>Mad Max</sup>.

Additionally, we have a lone ball bouncing around on the inside. If the ball touches our player, an sound is fired and the `Game` system's `restart()` method is called. We have defined wrapper classes for `Thunderdome`, `Ball`, and `Player` just to make our lives easier and to keep everything organized and modular.

If you take a look at our entities, you will notice that none of them have functions to animate or update. Instead, they only keep track of their components. This is because we are following the Entity-Component-System paradigm, in which the **game `System`**, and not the entities themselves, calculates and applies updates.

## The System

In this application, the main `system` we want to be focusing on is defined in the  `Game` class. A common pattern in game systems design is to use a `tick()` or `update()` function that performs some operation(s) on every unit of game time. We are using just that! `Game`'s `tick()` function does the following every time the program runs an update:
  - For every ball:
    - check whether the ball is colliding with the player
      - if yes, invoke `restart()`
    - check whether the ball is colliding with the outer sphere
      - if yes, update direction of ball
    - move the ball

If you would like some 'low hanging fruit' on how you can start interacting with the code, open up `index.js` and add a bunch of `GAME.spawnBall()` calls!

## Deliverables

**Improve Gameplay**. As the game currently stands, one ball is bouncing around. If the player collides with a ball then all balls are de-spawned. While we have a strong foundation, we haven't done much with the functionality that is available with the existing code. Start with this:

  - When a player collides with a ball (a.k.a. when the `restart` function is called), a new ball should be created so that the fun can continue
  - Over time (i.e. every 5 seconds) a new ball should spawn. Do not use `setInterval()`!

Once you have completed the above, try to implement new features of your own design to the game we have. This could be anything from adding sounds to ball-wall collisions, improving the game controls, changing the goal to collecting balls instead of avoiding them, or whatever you like! The [documentation][a-frame-doc] for a-frame is very beginner friendly, and if you are looking for inspiration their [examples][a-frame-examples] page has some great ideas to get the creativity flowing.

[a-frame-examples]: "https://aframe.io/"
[a-frame-doc]: "https://aframe.io/docs/0.8.0/introduction/"
[software-architecture]: "https://en.wikipedia.org/wiki/Software_architecture"
[previous-lab]: "https://github.com/learn-co-curriculum/entity-component-system"
