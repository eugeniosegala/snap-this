const { fork } = require('child_process');

const compute = fork('./index');

compute.send('start');

compute.on('message', () => {
  console.log('Starting...');
});