let countApp = 0;
    let countOrange = 0;
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            countApp++;
        }
    }
    for (let j = 0; j < oranges.length; j++) {
        if (b + oranges[j] <= t && b + oranges[j] >= s) {
            countOrange++;
        }
    }
    console.log(countApp);
    console.log(countOrange);

