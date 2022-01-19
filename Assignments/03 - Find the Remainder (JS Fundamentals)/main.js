function RemainderFunc(dividend, divisor) {

    /*Create a function that will take any number, 
    divide the number by any number, and the output 
    should be how many times the number got divided 
    as well as the modulus of the numbers you are dividing.*/

    var count = 0;

    if (divisor == 0) {

        return "Error: Cannot Divide By Zero"
    }
     
    else if (divisor > 0) {

        for (let i = 1; divisor <= dividend; i++) {

            count = i;

            dividend -= divisor;
        }

        return `Result: [` + count + `] Remainder: [` + dividend + `]`
    }
}