const EventEmitter = require('events');

const customEmiter = new EventEmitter();

customEmiter.on('response', (name, id) => {
    console.log(`data recieved user: ${name} with id: ${id}`);
});

customEmiter.on('response', () => {
    console.log(`some other logic here`);
});

customEmiter.emit('response', 'gregory', 28)