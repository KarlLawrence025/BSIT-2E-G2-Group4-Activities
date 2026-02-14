function computeEvenOddSum() {
    let num = parseInt(prompt("Enter a positive number:"));

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    alert("Sum of Even Numbers: " + evenSum + 
          "\nSum of Odd Numbers: " + oddSum);
}

computeEvenOddSum();