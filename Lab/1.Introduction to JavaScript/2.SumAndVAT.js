function calculateSumVAT(nums){
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + Number(nums[i]);
    }
    let vat = sum * (20/100);
    console.log('sum = ' + sum);
    console.log('VAT = ' + vat);
    console.log('total = ' + (sum * 1.20))
}

calculateSumVAT([1.20, 2.60, 3.50]);
calculateSumVAT([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);