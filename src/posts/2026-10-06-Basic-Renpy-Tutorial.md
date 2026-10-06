---
title: "A Very Basic Ren'Py Tutorial"
author: kanekos
date: 2026-10-06
tags: ["resources", "gamedev", "coding"]
image: /posts/images/renpy/dialogue.png
description: A super, duper extremely basic Ren'Py scripting tutorial and quick start guide.
---

I got a comment regarding coding in Ren'Py so here is an extremely basic quick start guide to making your own visual novels with it. I will add on to this guide if there are more questions.

### Step 1: Download and install Ren'Py

You can download it [here](https://www.renpy.org/). I personally use version 8.5.2 but any version will work.

### Step 2: Create a new project

Open the Ren'Py application and click +Create New Project. Go through the options that come up and pick whatever suits you.

{% imgBlock "/posts/images/renpy/renpy_1.png", "" %}
{% imgBlock "/posts/images/renpy/renpy_2.png", "" %}

### Step 3: Open the project's script

After your project is created, you should see it in the launcher.

{% imgBlock "/posts/images/renpy/renpy_launcher.png", "" %}

Click "script.rpy" and it should open in your default code or text editor. You can take reference from the default code in the script to start your own scripting or follow what I have in the next steps.

{% imgBlock "/posts/images/renpy/script.png", "" %}

### Step 4: Set up the basics

Define a new character using the line below:

```
define b = Character("Bob", image="bob")
```

Define a default image for your character:

```
image bob default = "images/bob_default.png"
```

Define an alternate image where the character has their mouth open (i.e. they are speaking):

```
image bob speak = "images/bob_speak.png"
```

(Make sure you actually add these images in your images folder!)

Put all of this before the part in your script that says "label start"

### Step 5: Start scripting

"label start" is where your story actually starts. Just start scripting inside that block. The code mentioned in the following steps should be _inside_ this block. Remove all the default code as well in case it throws an error.

### Step 6: Show background image

To display any background image, use this line:

```
scene your_background
```

{% imgBlock "/posts/images/renpy/background.png", "" %}

Make sure you have a file called your_background.png (or jpg/ webp/ whatever) in your images folder! Also ideally it should match the resolution of your game! If your game is 1920px x 1080px then make it the same resolution!!

### Step 7: Show character

To show your character's sprite, you can use this line:

```
show bob default
```

{% imgBlock "/posts/images/renpy/character.png", "" %}

### Step 8: Add narration

Write anything in quotation marks inside of the "label start" block to make it print in the dialogue box.

**Example**:

```
"This is the start of the story."
```

{% imgBlock "/posts/images/renpy/narration.png", "" %}

This will show as narration text and is not tagged to any character.

### Step 9: Add character dialogue

To make your character say something, you can write this following:

```
b @ speak "Hi, I'm Bob."
```

{% imgBlock "/posts/images/renpy/dialogue.png", "" %}

This will show as Bob saying it. The "@ speak" part of the line is used to display Bob's sprite with his mouth open (the talking sprite).

<hr class="dotted-divider">

Aaaaand that is all. If you followed this guide up till this point, your script.rpy file should look something like this:

```
define b = Character("Bob", image="bob")

image bob default = "images/bob_default.png"
image bob speak = "images/bob_speak.png"

label start:

    scene your_background

    show bob default

    "This is the start of the story."

    b @ speak "Hi, I'm Bob."

    return
```

Now you can make the rest of the game 😭

In all seriousness, if there is an ask for how to do something more specific in Ren'Py, I can try to make a tutorial for that as well.

Or you can check out the [Ren'Py documentation](https://www.renpy.org/doc/html/index.html). Or the tutorial game they provide you upon installation of the software.
