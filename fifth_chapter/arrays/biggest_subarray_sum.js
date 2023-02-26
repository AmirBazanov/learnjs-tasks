const getMaxSubSum = (arr) => {
    let maxSum = 0;
    let sum = 0;

    for (let ell of arr) {
        sum += ell;
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) sum = 0;
    }

    return maxSum;
}
