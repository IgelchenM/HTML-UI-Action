App.onAppStart = function(){
    db                      = KnuddelsServer.getPersistence(),
    logger                  = KnuddelsServer.getDefaultLogger(),
    userAccess              = KnuddelsServer.getUserAccess(),
    channel                 = KnuddelsServer.getChannel(),
    channelConfiguration    = channel.getChannelConfiguration(),
    channelRights           = channelConfiguration.getChannelRights(),
    channelmoderatoren      = channelRights.getChannelModerators(),
    channelDesign           = channel.getChannelDesign(),
    channelname             = channel.getRootChannelName(),
    pfad                    = KnuddelsServer.getFullImagePath(''),
    
    backgroundColor         = channelDesign.getBackgroundColor(),
    defaultFontColor        = channelDesign.getDefaultFontColor(),
    bot                     = KnuddelsServer.getDefaultBotUser(),
    testSystem              = KnuddelsServer.getChatServerInfo().isTestSystem();
    
    var humanOnlineUsers = KnuddelsServer.getChannel().getOnlineUsers(UserType.Human);
    for(i in humanOnlineUsers){
        if(humanOnlineUsers[i].isAppDeveloper() || humanOnlineUsers[i].isAppManager()){
            var user = humanOnlineUsers[i];
            var uPers = user.getPersistence();
            
            var DATEN = {testsystem: testSystem, background: {R: backgroundColor.getRed(), G: backgroundColor.getGreen(), B: backgroundColor.getBlue()}};
            var htmlFileEdit = new HTMLFile('home.html', DATEN);
            appContentEdit = AppContent.popupContent(htmlFileEdit, 300, 50);
            if(user.canSendAppContent(appContentEdit)===true){
                user.sendAppContent(appContentEdit);
            }
            appContentEdit.addCloseListener(function(user, appContent){
                user._removeNicklistIconById('playIcon');
            });
        }
    }
}