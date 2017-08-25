App.onEventReceived = function(user, key, data)
{
    switch(key){
        case 'commandButton':
        switch(data.command.toString()){
            case 'sayHello':
                sayHello(user);
            break;
            case 'sayBye':
                sayBye(user);
            break;
        }
        break;
        default:
            logger.warn(key);
        break;
    }
};