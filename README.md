# Explorer
A bot designed to make pathing through oceans so much easier

This bot is inspired by [SleepingFox's Travel Bot](https://github.com/SleepingFox8/AM-TravelBot) and updated for 1.18.2, designed for CivMC.
We are likely not going to backport, as the above bot works on older versions.

This bot is exclusively for JSMacros. Any other macro mod will likely not work.

Version 0.5 is now (somewhat) released!
The current version has several known issues, as well as a few unknown. We are working on all of them (trust us, we know)


# TO USE:

If, for whatever reason, you are using the early bot, this is how you do so:
1: Install JSMacros.

2: Install Explorer.

3: Launch Minecraft with JSMacros.

4: Open the config folder for JSMAcros.

5: Place Explorer in the "Macros" folder inside the config.

After you do this, to actually use the bot, check with JSMacros for how to set up a keybind for a script. The UI is not very intuitive but it should be
simple enough to do so.

To change destinations, enter into the config and find the X,Z values on line 8. Change these values to whatever you want.
*WARNING: You are responsible for any deaths, as the bot cannot see any players or traps or otherwise. It is up to you to set a known good path!*
The bot cannot pathfind around islands or obstacles, you must set the coordiantes yourself (at the moment).
This bot is currently not ideal for river travel, as the quick direction changes cause the bot to struggle.
Future updates will allow you to set a custom path for the bot to follow, so stay up-to-date.


# Planned features:

Complex routes via "waypoints" set by the user. This allows the bot to travel more complex routes by traveling through known good paths.

Land-mode. Traveling through cities and whatnot.

Rail-mode. Allowing the bot to travel through rail systems automatically including the use of /dest

Dynamically switch from boating to walking.

Logging any issues it encounters.

Actual tutorial on how to use

And more (coming soon)
