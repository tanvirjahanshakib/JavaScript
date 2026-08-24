function isElevatorSafe(weights) {
        if (!Array.isArray(weights )) {   
            return "Invalid";
        }
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (typeof weights[i] !== "number") {
            return "Invalid";
        }
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
let elevatorWeights6 = {"weight":60}
let elevatorWeights7 = {"120": 120, "150": 150, "100": 100}
console.log(isElevatorSafe(elevatorWeights1));
console.log(isElevatorSafe(elevatorWeights2));
console.log(isElevatorSafe(elevatorWeights3));
console.log(isElevatorSafe(elevatorWeights4));
console.log(isElevatorSafe(elevatorWeights5));
console.log(isElevatorSafe(elevatorWeights6));
console.log(isElevatorSafe(elevatorWeights7));






