console.log('Script start');

setTimeout(() => {
  console.log('Macrotask: setTimeout callback');
}, 0);

function recursiveMicrotask() {
  Promise.resolve().then(() => {
    console.log('Microtask: recursive promise');
    recursiveMicrotask();  // Schedules another microtask recursively
  });
}

recursiveMicrotask();

console.log('Script end');

// o/p:
// Script start
// Script end
// Microtask: recursive promise
// Microtask: recursive promise
// Microtask: recursive promise
// ...
