function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    let costPer100Token = 5;
    if (tokensUsed <= 500) {

        return 0;
    } else if (tokensUsed > 500) {
        let payForExtraUsedTokens = tokensUsed - 500;
        let costForExtraUsedTokens = Math.floor(payForExtraUsedTokens / 100) * costPer100Token;
        return costForExtraUsedTokens;
    }

}