//delete Array.prototype.push

console.info('CASE addvarious animals to array')

Array.prototype.push = function () {

        for(var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            this[this.length] = argument
        }

    return this.length

}

var animals = ['pigs', 'goats', 'sheep', 'cows']

var count = animals.push('chickens', 'cats', 'dogs')
console.debug(count)
//Exped output: 7

console.assert(count === 7, 'count is 7')

console.debug(animals)
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

console.assert(animals[0] === 'pigs', 'animals 0 is pig')
console.assert(animals[1] === 'goats', 'animals 1 is pig')
console.assert(animals[2] === 'sheep', 'animals 2 is pig')
console.assert(animals[3] === 'cows', 'animals 3 is pig')
console.assert(animals[4] === 'chickens', 'animals 4 is pig')
console.assert(animals[5] === 'cats', 'animals 5 is pig')
console.assert(animals[6] === 'dogs', 'animals 6 is pig')
