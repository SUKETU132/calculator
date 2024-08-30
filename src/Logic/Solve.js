
// Simple Approach

// -> i = i+2 loop will be run -> means operator to operator

const solve = (value) => {
    let Result = [];
    let arr = [];
    let numberToBeAdded = '';

    for (let char of value) {
        if (['*', '+', '-', '/'].includes(char)) {
            arr.push(Number(numberToBeAdded));
            arr.push(char);
            numberToBeAdded = '';
        } else {
            numberToBeAdded += char;
        }
    }

    if (numberToBeAdded) {
        arr.push(Number(numberToBeAdded));
    }

    Result.push(arr[0]);

    for (let i = 1; i < arr.length; i += 2) {
        let secondElement = arr[i + 1];

        if (arr[i] === "*") {
            let firstElement = Result.pop();
            let needToBePushed = firstElement * secondElement;
            Result.push(needToBePushed);
        } else if (arr[i] === "/") {
            let firstElement = Result.pop();
            let needToBePushed = firstElement / secondElement;
            Result.push(needToBePushed);
        } else {
            Result.push(arr[i]);
            Result.push(secondElement);
        }
    }

    let answer = Result[0];

    for (let i = 1; i < Result.length; i += 2) {
        let nextNumber = Result[i + 1];

        if (Result[i] === "+") {
            answer += nextNumber;
        } else if (Result[i] === "-") {
            answer -= nextNumber;
        }
    }

    return answer;
};

export default solve