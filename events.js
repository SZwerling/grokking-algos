class Events {
    constructor(){
        this.events = {}
    }
    //register an event handler
    on(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback)
        } else {
            this.events[eventName] = callback
        }
    }
    //trigger all callbacks associated w a given event
    trigger(eventName){
        if(this.events[eventName]){
            for(let cb of this.events[eventname]){
                cb();
            }
        }

    }
    //remove all event handlers associated with a given evetName
    off(eventName){
        delete this.events[eventName];
    }
}