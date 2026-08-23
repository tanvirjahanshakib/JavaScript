function isElevatorSafe(weights) {
    let i = 0;
    for (i = 0; i < weights.length; i++) {
        if (!Array.isArray(weights ) || typeof weights[i] !== "number") {   
            return "Invalid";
        }
    }
    let sum = 0;
    for (const num of weights) {
        sum += num;
    }
    if (sum > 400) {
        return false;
    } else if (sum <= 400) {
        return true;
    }

}
let elevatorWeights1 = [60, 75, 50]
let elevatorWeights2 = [90, 100, 95, 120]
let elevatorWeights3 = [400]
let elevatorWeights4 = "60,75,50"
let elevatorWeights5 = [60, 75, "50"]
console.log(isElevatorSafe(elevatorWeights1));
console.log(isElevatorSafe(elevatorWeights2));
console.log(isElevatorSafe(elevatorWeights3));
console.log(isElevatorSafe(elevatorWeights4));
console.log(isElevatorSafe(elevatorWeights5));






