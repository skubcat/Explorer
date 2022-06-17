# Explorer
A bot designed to make pathing through oceans so much easier

This bot is inspired by [SleepingFox's Travel Bot](https://github.com/SleepingFox8/AM-TravelBot) and updated for 1.18.2, designed for CivMC.
We are likely not going to backport, as the above bot works on older versions.

This bot is exclusively for JSMacros. Any other macro mod will likely not work.

Version 0.5 is now (somewhat) released!
The current version has several known issues, as well as a few unknown. We are working on all of them (trust us, we know)


# USAGE:

If, for whatever reason, you are using the early bot, this is how you do so:

1: Install JSMacros.

2: Install Explorer.

3: Launch Minecraft with JSMacros.

4: Open the config folder for JSMAcros.

5: Place Explorer in the "Macros" folder inside the config.

After you do this, to actually use the bot, check with JSMacros for how to set up a keybind for a script. The UI is not very intuitive but it should be
simple enough to do so.


To make a move order, edit Explorer.js after placing it in your JSmacros/macros folder.
Then, create a new move order with the constructor ```newmoveOrder();```

Heres an example of creating a move order queue.
```
a = new moveOrder();
a.add({x: 50, z: 50})
a.add({x: 95, z: 45})
a.add({x: 200, z: 450})
```
Afterwards use the ```startOrder``` function to begin the loop. WARNING: It can't walk backwards
through coordinates at the moment. A -> B is different from B -> A. 
```startOrder(pavia)```

Chat usage is not implented, this is *currently* the only way to move the bot.

# Planned features:

Complex routes via "waypoints" set by the user. This allows the bot to travel more complex routes by traveling through known good paths. (Implented, search algorithm for nodes on the way.)

Rail-mode. Allowing the bot to travel through rail systems automatically including the use of /dest

Dynamically switch from boating to walking.

Logging any issues it encounters.
