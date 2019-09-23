console.log('hello from utils.js');

const name = 'longoria';

const add = function(a, b) {
    return a + b;
}

const getNotes = () => 'My Notes...';

// export the objects you want to be shared.
//module.exports = add;
//module.exports = name;
//module.exports = getNotes;

module.exports = { name, add, getNotes };