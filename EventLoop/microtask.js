console.log('Script start');

setTimeout(() => {
  console.log('Macrotask: setTimeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask: Promise.then callback');
});

queueMicrotask(() => {
  console.log('Microtask: queueMicrotask callback');
});

console.log('Script end');
// o/p : 
// Script start
// Script end
// Microtask: Promise.then callback
// Microtask: queueMicrotask callback
// Macrotask: setTimeout callback
