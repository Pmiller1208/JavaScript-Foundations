// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
let principle = 200000;
let instRate = .05;
let years = 30;
const name = "Patrick Miller"
 




// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/
const monthlyInterestRate = instRate/12;
const periods = years*12
// console.log(periods);



// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
const exponent = Math.pow((1 + monthlyInterestRate), periods)
const numerator = monthlyInterestRate * exponent;
const denominator = exponent - 1;
// const monthlyRate = principle * (numerator / denominator);
// console.log(monthlyRate)

// function monthlyRate(){
//     let result = (principle * (numerator/denominator)).toFixed(2);
//     return result;
// }

// console.log(monthlyRate());
// console.log(100.12345.toFixed(4));



// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
// function mortgageCalculator(){
//     const exponent = Math.pow((1 + monthlyInterestRate), periods);
//     const numerator = monthlyInterestRate * exponent;
//     const denominator = exponent - 1;
//     function monthlyRate(){
//         let result = (principle * (numerator/denominator)).toFixed(2);
//         return result;
//     }
//     return name + " your monthly rate is $" + monthlyRate();
// }
// console.log(mortgageCalculator());




// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

// function add(num1, num2){
//     return num1 + num2;
// }
// add(3,3);

// function mortgageCalculator(p, i, n){
//     let principle = p;
//     let instRate = i;
//     let periods = n*12;
//     const exponent = Math.pow((1 + monthlyInterestRate), periods);
//     const numerator = monthlyInterestRate * exponent;
//     const denominator = exponent - 1;
//     function monthlyRate(){
//     return principle * (numerator/denominator);
//     }
//     return name + " your monthly rate is $" + (monthlyRate().toFixed(2));
// }
// console.log(mortgageCalculator(200000, 0.5, 30));





// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/
// function mortgageCalculator(p, i, n, credit){
    
//     function creditCalc(credit){
//         if(credit > 740){
//             let discount = i * .50;
//             let newRate = i - discount;
//             return newRate;
//         } else if (credit < 660){
//             let increase = i * .50;
//             let increaseNewRate = i + increase;
//             return increaseNewRate;
//         } else if (credit <= 740 && credit >= 660){
//             return instRate
//         }
//     }
//  console.log(creditCalc(credit))

//     let principle = p;
//     let instRate = creditCalc(credit) / 12;
//     let periods = n*12;
    
//     const exponent = Math.pow((1 + monthlyInterestRate), periods);
//     const numerator = monthlyInterestRate * exponent;
//     const denominator = exponent - 1;
//     function monthlyRate(){
//     return principle * (numerator/denominator);
//     }
//     function monthlyRate(){
//     let result = (principle * (numerator/denominator)).toFixed(2);
//     return result;
//     }

// }

// console.log(mortgageCalculator(200000, 0.5, 30, 780));

function mortgageCalculator(name, principal, interestRate, years, creditScore){
    // part 0) Credit Score discount 
    
    function creditCalc(creditScore){
        if (creditScore > 740 ){
            let discount = interestRate * .50;
            console.log(`I am the discount ${discount}`)
            let discountedIRate = interestRate - discount
            console.log(`I am the decreased intrest rate of: ${discountedIRate}`) 
            return discountedIRate; 
            // interest rate - 50%
        } else if (creditScore < 660){
            let increase = intrestRate * .50;
            let increasedIRate = interestRate + increase
            console.log(`I am the increased intrest rate of: ${increasedIRate}`) 
            return increasedIRate;
            // 660, interest rate increases by 0.5%
        } else if (creditScore >=660 && creditScore <=740 ) {
            return interestRate; 
            // Credit of between 660 and 740 mantains the same interest rate 
        }
    }
console.log(creditCalc(creditScore))
    
    
    // part 1) Get I and N
    var I = creditCalc(creditScore) / 12;
    console.log(`I am the monthly intrest rate: ${I}`)
    var N = years * 12;
    // part 2) 
    var numerator =  I*(1+I)**N;;
    var denominator = (1+I)**N-1;
    var mrPreRounded = principal * (numerator/denominator);
    var monthlyRate =  mrPreRounded.toFixed(2)
    // part 3) Return string greeting with Monthly Rate
    return `${name}, your monthly rate is $${monthlyRate}`
}
console.log(mortgageCalculator("Patrick", 300000, 0.05, 20, 780));




// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

function variableInterestRate(P, I, N){
    let decreased = I * .50;
    let newPrecent = I - decreased;
        for (let i = 0; i < 10; i++){
            let result = newPrecent += 0.005
            // console.log(result.toFixed(3))
            var iR =  result/12; 
            var pay = N * 12;
            var numerator = iR*(1+iR)**pay;
            var denominator =  (1+iR)**pay-1;
            var roundedDeno = Math.round((denominator*100)/100)
            var monthlyRatePreRounded = P * (numerator/denominator);
            var monthlyRate = monthlyRatePreRounded.toFixed()
            console.log(
                `{Name}, with an interest rate of ${result.toFixed(3)}, your monthly rate is $${monthlyRate}`
                );
        }
    }
    variableInterestRate(200000, 0.04, 30)



// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
