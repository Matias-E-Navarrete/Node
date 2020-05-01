const Emitter = require("./emitter");

const emitter = new Emitter();

emitter.on("save",()=>{
    console.log('On save method activated');
});

emitter.on("save",()=>{
    console.log('On save method activated 2');
});

emitter.emit("save");