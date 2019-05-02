@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0/../sculpin/sculpin/bin/sculpin.php
php "%BIN_TARGET%" %*
