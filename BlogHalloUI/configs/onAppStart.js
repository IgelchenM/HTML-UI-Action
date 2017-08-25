App.onAppStart = function(){
    bot                 = KnuddelsServer.getDefaultBotUser(), // BotUser definieren
    humanOnlineUsers    = KnuddelsServer.getChannel().getOnlineUsers(UserType.Human); // Alle User aus dem Channel laden
    
    /* Als nächstes werden alle User im Channel ein HTML-UI erhalten */
    for(i in humanOnlineUsers){
        if(humanOnlineUsers[i].isAppDeveloper() || humanOnlineUsers[i].isAppManager()){ // Aber nur, wenn sie der AppEntwickler oder AppManager der App sind
            var user = humanOnlineUsers[i]; // Laden des aktuellen Users
            var DATEN = {}; // Daten, die wir übergeben wollen - in diesem Falle keine.
            var htmlFileEdit = new HTMLFile('home.html', DATEN);
            appContentEdit = AppContent.popupContent(htmlFileEdit, 300, 50);
            if(user.canSendAppContent(appContentEdit)===true){
                user.sendAppContent(appContentEdit);
            }
        }
    }
}
