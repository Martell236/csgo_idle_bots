@echo off
taskkill /f /IM csgo.exe
taskkill /f /IM cs_afk.exe
for /F "tokens=*" %%A in (config.txt) do (
   del /f %%A
)