
// Simple Approach

// -> i = i+2 loop will be run -> means operator to operator

const solve = (value) => {
    let Result = [];
    Result.push(Number(value[0]));

    for (let i = 1; i < value.length; i += 2) {
        let secondElement = Number(value[i + 1]);

        if (value[i] === "*") {
            let firstElement = Result.pop();
            let needToBePushed = firstElement * secondElement;
            Result.push(needToBePushed);
        } else if (value[i] === "/") {
            let firstElement = Result.pop();
            let needToBePushed = firstElement / secondElement;
            Result.push(needToBePushed);
        } else {
            Result.push(value[i]);
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