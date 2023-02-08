// "use strict" 

// Esther's solution

function extraLongFactorials(n){
    let result = [BigInt(0), BigInt(1)];

    const factorial = (num) => 
        typeof result[num] !== "number" ? num - BigInt(1) > 0 ? num * factorial(num -  BigInt(1)) : BigInt(1) : result[num];

    console.log(String(factorial(BigInt(n))))
}

// Chisomo's solution

function breakingRecords(scores){
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let higherCount = 0;
    let lowerCount = 0;
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > highestScore){
            highestScore = scores[i];
            higherCount++
        }
        else if(scores[i] < lowestScore){
            lowestScore = scores[i];
            lowerCount++
        }
    }
    return [higherCount, lowerCount];
}
