const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Predictions:
// Line 5 will print Tesla to the console.
// Line 6 will print Mervedes to the console.

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Predictions
// Line 19 will generate an error as name is undefined in this context and the code will close before getting to line 20.

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// Predictions:
// line 33 will print 12345.
// line 34 will print undefined as password is not defined within the person object.


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// Predictions:
// Line 46 will print False as 2 is not equal to 5.
// Line 47 will print True as 2 is equal to 2.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// Predictions:
// Line 61 will print the word value.
// Line 62 will print [1,5,1,8,3,3].
// Line 63 will print 1.
// Line 64 will print 5.