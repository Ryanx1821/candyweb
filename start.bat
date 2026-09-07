@echo off
title SugarDrop Co. Candy Store
echo ======================================================
echo    🍬 Starting SugarDrop Co. Storefront Server...
echo ======================================================
echo.

REM Open browser after a brief delay
start "" http://localhost:3000

REM Run Node server
node server.js

pause
