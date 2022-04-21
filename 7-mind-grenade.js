const num1 = 5
const num2 = 10;

function addValues(){
    console.log(`The sum is: ${num1+num2}`)
}

// This code will execute when we import this module into another file, because we are invoking it into this module, even if we don't asign it to a variable when we import it

addValues()