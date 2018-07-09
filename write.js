// // // const {EventEmitter} = require('events');

// // // const event = new EventEmitter();

// // // event.on('TestRun', (name) => {
// // //     console.log(`Test with name: ${name} is running`)
// // // });

// // // event.on('TestPass', (name, longevity) => {
// // //     console.log(`Test ${name} passed after ${longevity}seconds`)
// // // })

// // // event.on('TestRun', ()=>{
// // //     console.log('-----------------------');
// // // })

// // // setTimeout(() => {event.emit('TestRun', 'Test1')
// // // event.emit('TestPass', 'test new', 200)
// // // event.emit('TestRun', 'Test2')
// // // event.emit('TestRun', 'Test3')
// // // event.emit('TestRun', 'Test4')
// // // },2000)



// // const {EventEmitter} = require('events');

// // const event = new EventEmitter;
// // event.once('statr', (arg) => {
// //     console.log(arg);
// // })
// // event.once('start', (arg) => {
// //     console.log(arg)
// // })

// // event.emit('statr', 'Istatert once')
// // event.emit('statr', 'Istatert twice')

// const {EventEmitter} =  require('events');

// class MyOwnEvent extends EventEmitter{
//     constructor(name){
//         super();
//         this.name = name;
//     }

//     on(eventName, fn){
//         console.log(`Add listener with name ${this.name}`)
//         super.on(eventName, fn)
//     }

//     removelistener(eventName, fn){
//         super.removeListener(eventName,fn)
//     }
// }

// const myEvent = new MyOwnEvent('Nick event')

// myEvent.on('Nick run', () => {
//     console.log('Nick running')
// })

// myEvent.emit('Nick run')
// myEvent.removelistener('Nick run')
// myEvent.emit('Nick run')

const {Writable} = require('stream');

const outStream = new Writable({
    write(chunk, encoding, callback){
        console.log(chunk.toString().toUpperCase());
        callback()
    }
})

process.stdin.pipe(outStream)
