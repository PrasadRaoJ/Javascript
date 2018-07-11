// Creating an array
const numbers = ['one', 'Two', 'Three', 'Four', 'Five']

// changing array values...
numbers[0]=1
console.log(numbers);

//start

numbers.shift() // it will shift index to 1 ..never shows 1st value..
console.log(numbers);


numbers.unshift('Something') // it will replace at index[0]
console.log(numbers);

// End
numbers.pop() // it delete last element..

console.log(numbers);

numbers.push('six')
console.log(numbers);

//Middle
numbers.splice(2,2,'hey')
console.log(numbers);
