const {EventEmitter} = require("events");
const {save} = require("./event-names");

const emitter = new EventEmitter();

emitter.on(save,()=>{
    console.log('On save method activated');
});

emitter.on(save,()=>{
    console.log('On save method activated 2');
});

emitter.emit(save);