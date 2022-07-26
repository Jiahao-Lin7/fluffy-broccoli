var fib = function(n) {
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    let dp = [0,1]
    for(let i = 2; i <= n ; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1000000007
    }
    return dp[n]
};