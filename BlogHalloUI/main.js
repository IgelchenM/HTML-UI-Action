/* Variablen definieren */
var bot                 = KnuddelsServer.getDefaultBotUser();
 
/* App inizialisieren */     
var App = {};
/* Ausgelagerte Dateien laden */
require('configs/onAppStart.js');   // Sachen, die beim AppNeustart ausgeführt werden sollen
require('configs/onEvents.js');     // Sachen, die bei einem Event ausgeführt werden sollen
require('configs/commands.js');     // Befehle, die User ausführen können