function sayHello(user){
    bot.sendPublicMessage('Ich soll euch von '+user.getProfileLink()+' herzlich grüßen!');
}

function sayBye(user){
    bot.sendPublicMessage(''+user.getProfileLink()+' verabschiedet sich, und ich richte es euch aus.');
}

App.chatCommands =
{
    // Anfang von Funktion huhu
    huhu: function(user, params){
        sayHello(user, params);
    },
    // Ende von Funktion huhu
    
    // Anfang von Funktion byebye
    byebye: function(user, params){
        sayBye(user, params);
    }
    // Ende von Funktion byebye
};