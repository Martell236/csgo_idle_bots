CSGO Idle Bot Readme

Prerequisites
-node js
-sandboxie with boxes set up (change file transfer rate to 10000mb)
-Files in repo
-notepad or preferred text editor

Trade Bot
-Edit configs for each bot
-Each config should have a username, password, shared secret (from Steam Desktop Auth), and a Steam ID to trade the items to
-uses node
-configs should be placed in config folder
-do not add configs/ to the front of the config name as the program accounts for it
-usage
	node bot.js config_name.json

csgo_afk.exe
-Config points to console.log for each bot
-Must set up sandboxie first and run csgo for the first time
-Calls csgo_afk.bat which starts the csgo sessions
-Must be ran as admin
-usage
	csgo_afk.exe (no command line options)

csgo_afk.bat
-Must edit to point to your sandboxie boxes
-Dosent need to be ran as it is executed by csgo_afk.exe

stop.bat
-Kills all csgo instances

First Run
On first run steam windows should open and prompt to login. Enable SDA on each account. Chose Remember password so you dont have to log in.
csgo_afk.exe is used to auto restart disconnected bots. After running, it will auto queue for deathmatch. Updates that give prompts at game
start give issues with the autostart. Make sure if there is a game update to manualy queue the bots if necessary.