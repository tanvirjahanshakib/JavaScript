function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    }

    else if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamAGoals < teamBGoals) {
        return "Team B Won";
    } else if (teamAGoals === teamBGoals) {
        return "Draw";
    } 
}
let matchResult = matchWinner(2, 1);
let matchResult1 = matchWinner(1, 3);
let matchResult2 = matchWinner(2, 2);
let matchResult3 = matchWinner("1", 0);
let matchResult4 = matchWinner("0", "2",);
console.log(matchResult);
console.log(matchResult1);
console.log(matchResult2);
console.log(matchResult3); 
console.log(matchResult4);