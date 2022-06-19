const arr = ['apple', 'banana'];

function sayHey(name) {
    console.log(`hey ${name}`);
}


function forEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i], i, array);
        
    }
}