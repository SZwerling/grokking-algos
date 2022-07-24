
//  @param {number[][]} accounts
//  @return {number}
 
 var maximumWealth = function(accounts) {
    let most = 0;
    for(let i = 0; i < accounts.length; i++){
        let temp = 0;
        for(let j = 0; j < accounts[i].length; j++){
           temp += accounts[i][j] 
        }
        most = Math.max(most, temp)
        console.log(most)
    }
    return most
    
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))